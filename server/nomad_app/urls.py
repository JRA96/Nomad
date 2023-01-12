from django.urls import path
from . import views

urlpatterns = [
    # top paths allow reloading of page not conflicting with React Router and URLs
    # request gets sent back to index where React Router takes control
    path('', views.home_page),
    path('login/', views.log_in_page),
    path('signup/', views.sign_up_page),
    path('explore/', views.explore_page),
    path('profile/', views.home_page),

    path('api/signup/', views.sign_up_page_api),
    path('api/login/', views.log_in_page_api),
    path('api/logout/', views.log_out_api),
    path('api/isloggedin/', views.is_logged_in_api),
    path('api/savetrip/', views.save_trip)
]
