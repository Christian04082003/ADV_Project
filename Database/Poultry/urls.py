from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('Poultry/', views.Poultry, name='Poultry'),
    path('select/', auth_views.LoginView.as_view(), name='select'),
    path('password/', views.password, name="password"),
    path('main/', views.main, name="main"),
    path('batchlog/', views.batchlog, name="batchlog"),
    path('inventory/', views.inventory, name="inventory"),
    path('growthlog/', views.growthlog, name="growthlog"),
    path('user/', views.user, name="user"),
]


