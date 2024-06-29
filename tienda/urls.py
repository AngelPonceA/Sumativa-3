from django.urls import path
from . import views

urlpatterns = [
    path('', views.tienda, name='tienda'),
    path('ficha/', views.ficha, name='ficha'),

]