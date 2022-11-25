from django.db import models
from django.contrib.postgres.fields import ArrayField

class User(models.Model):
    img = models.ImageField(upload_to='static/')
    username = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=0)
    hobbies = models.CharField(max_length=200, default="")
    

