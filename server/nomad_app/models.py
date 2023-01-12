from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    email = models.EmailField(
        max_length = 255,
        unique = True,
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Trips(models.Model):
    email = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    starting_location = models.TextField()
    end_location = models.TextField()