from rest_framework.routers import DefaultRouter
from scraper.api.urls import scraper_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(scraper_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls')),  # For browsable API authentication
]
