from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Scraper(models.Model):
    keyword = models.CharField(max_length=100, default='default_keyword')  # The keyword used for the search
    site = models.CharField(max_length=100, default='default_site')
    img = models.URLField(default='https://example.com/default_image.jpg')  # URL of the product image
    product_name = models.CharField(max_length=255, default='default_product_name')  # Name of the product
    price = models.CharField(max_length=50, default='0')  # Price of the product
    url = models.URLField()  # URL of the product page
    scraped_at = models.DateTimeField(default=now)  # Timestamp of when it was scraped

    def __str__(self):
        return f"{self.product_name} - {self.price}"
    
    # auto_now_add=True, 
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    # Add any other custom fields here