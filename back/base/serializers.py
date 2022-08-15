from rest_framework.serializers import ModelSerializer
from base.models import Note,Airline_Companies,Flights,Countries,Customers,Tickets
 
 
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class Airline_CompaniesSerializer(ModelSerializer):
    class Meta:
        model = Airline_Companies
        fields = '__all__'

class FlightsSerializer(ModelSerializer):
    class Meta:
        model = Flights
        fields = '__all__'


class CountriesSerializer(ModelSerializer):
    class Meta:
        model = Countries
        fields = '__all__'

class CustomersSerializer(ModelSerializer):
    class Meta:
        model = Customers
        fields = '__all__'

class TicketsSerializer(ModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'