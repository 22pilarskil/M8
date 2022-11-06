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
    form = UserForm(request.POST, request.FILES)
    print(request.POST)
    if form.is_valid():
        print("Here")
        form.save()
    print(User.objects.all())
    return JsonResponse({'success':True})

def deleteAll(request):
    for file in os.listdir('./static'):
        os.remove('./static/' + file)
    User.objects.all().delete()
    
    return JsonResponse({'success':True})