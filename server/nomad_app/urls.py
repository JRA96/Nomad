from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page),
    path('api/signup/', views.sign_up_page),
    path('api/login/', views.log_in_page),
    path('api/logout/', views.log_out)
]
