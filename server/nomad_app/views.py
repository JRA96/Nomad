from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.core import serializers
from .models import AppUser as User
import json

def home_page(request):
    return HttpResponse(open('static/index.html').read())

@api_view(['POST'])
def sign_up_page(request):
    try:
        User.objects.create_user(username = request.data['username'],
        password = request.data['password'],
        email = request.data['email'])
        JsonResponse({'success': 'True'})
    except Exception as e:
        print(str(e))
        JsonResponse({'success': 'False'})

@api_view(['POST','GET'])
def log_in_page(request):
    return JsonResponse({'success': 'False'})

@api_view(['POST'])
def log_out(request):
    pass
