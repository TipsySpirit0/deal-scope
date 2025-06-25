from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
import requests
import random
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

        products = []
        products.extend(self.scrape_jumia(search_query))
        products.extend(self.jiji_scraper(search_query))
        products.extend(self.slot_scraper(search_query))
        random.shuffle(products)  # Randomize the products list

        serializer = self.serializer_class(products, many=True)
        return Response(serializer.data, status=201)

    def scrape_jumia(self, search_query):
        headers = {
            "User-Agent": "Mozilla/5.0"
        }
        base_url = f"https://www.jumia.com.ng/catalog/?q={search_query}&page="
        products = []
        
        for page in range(1, 5):  # Change 6 to the number of pages you want to scrape
            url = f"{base_url}{page}"
            response = requests.get(url, headers=headers)
            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.content, 'html.parser')
            for item in soup.select("article.prd"):
                name_tag = item.select_one("h3.name")
                price_tag = item.select_one("div.prc")
                link_tag = item.find('a', class_='core')['href']
                product_link = 'https://www.jumia.com.ng' + link_tag
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
        return products

    def slot_scraper(self, search_query):
        base_url = f'https://slot.ng/index.php/catalogsearch/result/?cat=&q={search_query}&p='
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0 Safari/537.36"
        }

        data = []
        for page in range(1, 5):  # Change 6 to the number of pages you want to scrape
            url = f'{base_url}{page}'
            response = requests.get(url, headers=headers)
            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')
            products = soup.find_all('div', class_='product-card__content')

            for product in soup.select('ol.products.list.items.product-items > li.product-item'):
                # Product Title
                name_tag = product.select_one('a.product-item-link').text.strip()
                
                # Image
                img = product.find('img', class_='product-image-photo')['src'] if product.find('img', class_='product-image-photo') else 'N/A'
                
                # Product Price
                price_tag = product.select_one('span.price').text.strip() if product.select_one('span.price') else 'N/A'
                price_tag = price_tag.replace('NGN', '₦').replace('&nbsp;', ' ')
                
                # Product Link
                link = product.find('a', class_='product-item-link')['href']

                product_data = {
                    "site": "Slot",
                    "img": img,
                    "keyword": search_query,
                    "product_name": name_tag,
                    "price": price_tag,
                    "url": link
                }
                data.append(product_data)
                
        return data
    
    def jiji_scraper(self, search_query):
        
        base_url = f"https://jiji.ng/search?query={search_query}&page="
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36"
        }
               
        for page in range(1, 10):
            search_query = search_query.replace(" ", "-")
            url = f"{base_url}{page}"

            try:
                response = requests.get(url, headers=headers)
                response.raise_for_status()
            except requests.exceptions.RequestException as e:
                print("Failed to retrieve data:", e)
                return []

            soup = BeautifulSoup(response.text, 'html.parser')
            listings = soup.find_all("div", class_="b-list-advert__gallery__item js-advert-list-item")  # main ad container
            # print(f"Found {len(listings)} listings for the query: {search_query} on page {page}")
            # if not listings:
            #     print(f"No listings found for the query: {search_query}. Please check the search term or try again later.")
            #     return []

            results = []

            for item in listings:
                title_tag = item.select_one("div.b-advert-title-inner")
                price_tag = item.select_one("div.qa-advert-price")
                img_tag = item.find("img")
                link_tag = item.find("a", href=True)

                title = title_tag.get_text(strip=True) if title_tag else "No title available"
                price = price_tag.get_text(strip=True) if price_tag else "No price available"
                link = base_url + link_tag['href'] if link_tag else "No link available"
                img = img_tag["src"] if img_tag else "No image available"
        

                result = {
                    "site": "Jiji",
                    "img": img,
                    "keyword": search_query,
                    "product_name": title,
                    "price": price,
                    "url": link,
                }
            
                results.append(result)
            
        return results

