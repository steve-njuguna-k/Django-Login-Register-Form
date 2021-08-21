from django.contrib import admin
from .models import Profile

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'date_joined', 'is_email_verified')
    search_fields = ['email']
    ordering = ['email']
    readonly_fields=('date_joined', 'last_login')
    
admin.site.register(Profile, ProfileAdmin)