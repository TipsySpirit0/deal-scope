from rest_framework.serializers import ModelSerializer
from ..models import Scraper  # Adjust the import based on your project structure

class ScraperSerializer(ModelSerializer):
    class Meta:
        model = Scraper  # Replace with your actual model
        fields = '__all__'  # Adjust fields as necessary