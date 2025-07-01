from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import ScraperViewSet, RegisterView  # ✅ FIXED

scraper_router = DefaultRouter()
scraper_router.register(r'scrapers', ScraperViewSet, basename='scraper')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),  # ✅ RegisterView here
    path('token/', TokenObtainPairView.as_view(), name='api_token_auth'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns += scraper_router.urls
