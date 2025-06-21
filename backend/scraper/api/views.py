from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
import requests
from bs4 import BeautifulSoup
from ..models import Scraper  
from .serializers import ScraperSerializer  

class ScraperViewSet(ModelViewSet):
    queryset = Scraper.objects.all()
    serializer_class = ScraperSerializer
    
    def create(self, request):
        search_query = request.data.get('keyword')
        if not search_query:
            return Response({"error": "Keyword is required"}, status=400)
        headers = {
            "User-Agent": "Mozilla/5.0"
        }
        url = f"https://www.jumia.com.ng/catalog/?q={search_query}"
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return Response({"error": "Failed to fetch data from Jumia"}, status=response.status_code)
        soup = BeautifulSoup(response.content, 'html.parser')
        products = []
        for item in soup.select("article.prd"):
            name_tag = item.select_one("h3.name")
            
            price_tag = item.select_one("div.prc")
            
            link_tag = item.find('a', href=True)
            product_link = 'https://www.jumia.com.ng' + link_tag['href'] if link_tag else 'N/A'
            
            img_tag = item.find("img")
            img_url = img_tag['data-src'] if img_tag and 'data-src' in img_tag.attrs else 'N/A'
            
            if name_tag and price_tag and link_tag and img_url:
                product = {
                    "site": "Jumia",
                    "img": img_url,
                    "keyword": search_query,
                    "product_name": name_tag.text.strip(),
                    "price": price_tag.text.strip(),
                    "url": product_link
                }
                products.append(product)
                # Save to database
                # Scraper.objects.create(**product)
        serializer = self.serializer_class(products, many=True)
        return Response(serializer.data, status=201)