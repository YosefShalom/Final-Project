"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('addUser/', views.addUser),
    path('addsuperuserUser/', views.addsuperuserUser),
    path('addstaffUser/', views.addstaffUser),
    path('add_Airline_Companies/', views.add_Airline_Companies),
    path('get_Airline_Companies/', views.get_Airline_Companies),
    path('getAirlinesByCountry/<int:Cdi>', views.getAirlinesByCountry, name="getAirlinesByCountry"),
    path('delete_Airline/<int:AiD>', views.delete_Airline),
    path('get_Flights/', views.get_Flights),
    path('get_all_Flights/', views.get_all_Flights),
    path('get_Flights/<int:index>', views.get_Flights, name="get_Flights"),
    path('getFlightsByDeparture_Time/<slug:Dt>', views.getFlightsByDeparture_Time, name="getFlightsByDeparture_Time"),
    path('getFlightsByDestinationCountryld/<int:DciD>', views.getFlightsByDestinationCountryld, name="getFlightsByDestinationCountryld"),
    path('get_Flights_by_parameters/<int:oricounid>/<int:dci>/<slug:dti>', views.get_Flights_by_parameters, name="get_Flights_by_parameters"),
    path('update_fields_Flights/<int:Upd_id>', views.update_fields_Flights, name="update_fields_Flights"),
    path('add_Flights/', views.add_Flights),
    path('delete_Flights/<int:fID>', views.delete_Flights),
    path('get_Countries/', views.get_Countries),
    path('add_Countries/', views.add_Countries),
    path('get_Customers/', views.get_Customers),
    path('add_Customers/', views.add_Customers),
    path('get_Tickets/', views.get_Tickets),
    path('get_Tickets_By_Flight_ld/<int:gFid>', views.get_Tickets_By_Flight_ld, name="get_Tickets_By_Flight_ld"),
    path('add_Tickets/', views.add_Tickets),
    path('delete_Tickets/<int:Tid>', views.delete_Tickets),
    path('delete_User/<int:uID>', views.delete_User),
    path('all_Airline_Companies_Crode/', views.all_Airline_Companies_Crode),
    path('orders/', views.orders),
    path('orders/<id>', views.orders),
    path('tickets/', views.tickets),
    path('tickets/<id>', views.tickets),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('ind', views.index),
]


