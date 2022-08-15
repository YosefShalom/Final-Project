from django.contrib import admin

# Register your models here.
from .models import Note,Airline_Companies,Flights,Customers,Tickets,Countries
 
admin.site.register(Note)
admin.site.register(Airline_Companies)
admin.site.register(Flights)
admin.site.register(Customers)
admin.site.register(Tickets)
admin.site.register(Countries)
