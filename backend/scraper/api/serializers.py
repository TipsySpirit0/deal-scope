from rest_framework.serializers import ModelSerializer
from ..models import Scraper 
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

User = get_user_model()

class ScraperSerializer(ModelSerializer):
    class Meta:
        model = Scraper 
        fields = '__all__'
        
class RegisterSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)