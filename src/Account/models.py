from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Profile(AbstractUser):
    is_email_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.email