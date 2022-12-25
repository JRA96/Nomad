from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.core import serializers
from .models import AppUser as User
from django.views.decorators.csrf import csrf_exempt
import json

# top functions allow reloading of page not conflicting with React Router and URLs
# request gets sent back to index where React Router takes control
def home_page(request):
    return HttpResponse(open('static/index.html').read())

def log_in_page(request):
    return HttpResponse(open('static/index.html').read())

def sign_up_page(request):
    return HttpResponse(open('static/index.html').read())

def explore_page(request):
    return HttpResponse(open('static/index.html').read())

# all api request will go through these routes below
@api_view(['POST'])
def sign_up_page_api(request):

    try:
        User.objects.create_user(username = request.data['email'],
            password = request.data['password'],
            email = request.data['email'])
        return JsonResponse({'success': 'True'})
    except Exception as e:
        print(str(e))
        return JsonResponse({'success': 'False'})

@api_view(['POST'])
def log_in_page_api(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email, password = password)

    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
                return JsonResponse({'success': 'True'})
            except Exception as e:
                print(str(e))
                return JsonResponse({'success': 'False', 'reason': 'login failed'})
        else:
            return JsonResponse({'success': 'False', 'reason': 'user account locked'})
    else:
        return JsonResponse({'success': 'False', 'reason': 'user does not exist'})

@api_view(['POST'])
def log_out_api(request):
    try:
        logout(request._request)
        return JsonResponse({'success': True})
    except Exception as e:
        return JsonResponse({'success': 'False', 'reason': 'logout failed'})

@api_view(['POST'])
def is_logged_in_api(request):
    if request.user.is_authenticated:
        return JsonResponse({'IsLoggedIn': True})
    else:
        return JsonResponse({'IsLoggedIn': False})