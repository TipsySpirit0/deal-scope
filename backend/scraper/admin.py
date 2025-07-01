from django.contrib import admin
from .models import Scraper
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
# Register your models here.

admin.site.register(Scraper)
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    pass