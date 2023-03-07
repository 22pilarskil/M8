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

def userInfoByID(id):
    user = User.objects.get(id=id)
    print("Hobbies: {}\nUsername: {}\nImage: {}\nAge: {}".format(user.hobbies_str, user.username, user.img, user.age))
    return {
        "Hobbies": user.hobbies_str,
        "Username": user.username,
        "Age": user.age
        }

@csrf_exempt
def filter(request):
    filters = request.POST
    hobby_filter = filters["hobbies_str"].split(",")
    lower_filter = None if not filters["lower"].isdigit() else int(filters["lower"])
    upper_filter = None if not filters["upper"].isdigit() else int(filters["upper"])
    print(hobby_filter)
    matches = User.objects.all()
    if (hobby_filter[0] != ''):
        matches = matches.filter(hobbies_str__contains=hobby_filter) # Match by hobbies
    if (upper_filter is not None):
        matches = matches.filter(age__lte=upper_filter) # Match by age upper limit
    if (lower_filter is not None):
        matches = matches.filter(age__gte=lower_filter) # Match by age lower limit
    print(matches)
    return JsonResponse({"success": True, "Users": [userInfoByID(user.id) for user in matches]})



for x in User.objects.filter(hobbies_str__contains=['Tennis']).filter(age__gte=16, age__lte=17):
    userInfoByID(x.id)