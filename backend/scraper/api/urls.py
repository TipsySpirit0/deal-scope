from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ScraperViewSet

scraper_router = DefaultRouter()
scraper_router.register(r'scrapers', ScraperViewSet, basename='scraper')