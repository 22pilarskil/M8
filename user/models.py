from django.db import models

class User(models.Model):
    img = models.ImageField(upload_to='static/')
    username = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=0)

