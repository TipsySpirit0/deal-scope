from django.shortcuts import render
import requests
from bs4 import BeautifulSoup

# Create your views here.
def scrape_jumia(request):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    # search_query = search_query.replace(" ", "+")
    url = f"https://www.jumia.com.ng/catalog/?q={request}"

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    products = []

    for item in soup.select("article.prd"):
        name_tag = item.select_one("h3.name")
        price_tag = item.select_one("div.prc")
        link_tag = item.find("a", href=True)

        if name_tag and price_tag and link_tag:
            product = {
                "name": name_tag.text.strip(),
                "price": price_tag.text.strip(),
                "link": "https://www.jumia.com.ng" + link_tag['href']
            }
            products.append(product)
            print(product)

    return render(request, 'home.html', {'products': products})