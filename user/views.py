from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import *
import os

# Create your views here.

def test(request):
    return HttpResponse("Test")

@csrf_exempt 
def generateUser(request):
    hobbies_list = request.POST["hobbies_str"].split(",")
    User.objects.create(
        img=request.FILES['img'], 
        username=request.POST['username'], 
        age=request.POST['age'], 
        hobbies_str=hobbies_list
        )
    return JsonResponse({'success':True})

@csrf_exempt
def queryUser(request):
    hobbies_str = request.POST["hobbies_str"].split(",")
    users = User.objects.filter(hobbies_str__contains=hobbies_str)
    usernames = [user.username for user in users]
    return JsonResponse({'success':True, 'usernames':usernames})

def deleteAll():
    for file in os.listdir('./static/pfps'):
        if (file[-3:] == "png"):
            os.remove('./static/pfps/' + file)
    User.objects.all().delete()
    return JsonResponse({'success':True})

def getLastAdded(request):
    print(User.objects.last().img)

# # deleteAll()
print(User.objects.filter(hobbies_str__contains=['Aircraft']))