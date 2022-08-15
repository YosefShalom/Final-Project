from datetime import date, datetime
from operator import length_hint
from urllib import response
from django.shortcuts import render
from django.http import JsonResponse
from django.urls import is_valid_path
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import NoteSerializer, Airline_CompaniesSerializer, CountriesSerializer, FlightsSerializer, CustomersSerializer, TicketsSerializer
from base.models import Note, Airline_Companies, Flights, Countries, Customers, Tickets,Order
from django.contrib.auth.models import User



date_only = datetime.now().date()
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token





class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def index(request):
    return JsonResponse({"text": "success"})


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    print("innnn")
    user = request.user
    print(user)
    notes = user.nots_set.all()
    print(notes)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

# register for SuperUser


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def addsuperuserUser(request):
    if request.user.is_superuser == 1:
        user = User.objects.create_user(username=request.data["username"],
                                        email=request.data["email"],
                                        password=request.data["password"],
                                        is_staff=1,
                                        is_superuser=1)
        return Response(request.data["username"])
    return Response({"your not superuser only superuser cen add superuser"})

# register for Staff users


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def addstaffUser(request):
    if request.user.is_staff == 1:
        user = User.objects.create_user(username=request.data["username"],
                                        email=request.data["email"],
                                        password=request.data["password"],
                                        is_staff=1)
        return Response(request.data["username"])
    return Response({"your not staff only staff cen add staff"})

# register


@api_view(['POST'])
def addUser(request):
    print(request.data)
    user = User.objects.create_user(username=request.data["username"],
                                    email=request.data["email"],
                                    password=request.data["password"],
                                    is_staff=0)
    return Response(request.data)

@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_User(request, uID=-1):
    if request.method == 'DELETE':  # method delete a row
        user = request.user
        
        user.delete()
        # flight = user.flights_set.all()
        # flight.get(_id=uID).delete()
        print(user)
        # Tickets.objects.get(Flight_ld=Fid).delete()
        return Response({'DELETE': uID})
    return Response({'DELETE': "You are not in the DELETE method"})


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def add_Airline_Companies(request):
    if request.user.is_staff == 1:
        print(request.data)
        print(request)
        print(request.data["ACname"])
        if request.data["contry_id"] =="" or request.data["ACname"]=="":
           print("you need to put some value in")
           return Response("you need to put some value in both filed")
        user = request.user
        Airline_Companies.objects.create(
            ACname=request.data["ACname"],
            desc=request.data["desc"],
            contry_id=request.data["contry_id"],
            contry_name=request.data["contry_name"],
            user=user)
        print(user)
        # airline_Companies = user.airline_Companies_set.all()
        # print(airline_Companies)
        # serializer = Airline_CompaniesSerializer(request.data, many=True)
        return Response(request.data)
    else:
        print("not is staf")
    return Response("not is staf")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Airline_Companies(request):
    print("innnn", request.user)
    user = request.user
    print(user)
    airline_Companies = user.airline_companies_set.all()
    print(airline_Companies)
    serializer = Airline_CompaniesSerializer(airline_Companies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAirlinesByCountry(request, Cdi,):
    airline_Companies =Airline_Companies.objects.all().filter(contry_id=Cdi)
    serializer = Airline_CompaniesSerializer(airline_Companies, many=True)
    return Response(serializer.data)


@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_Airline(request, AiD=-1):
    if request.method == 'DELETE':  # method delete a row
        user = request.user
        airline_Companies = user.airline_companies_set.all()
        airline_Companies.get(_id=AiD).delete()
        print(airline_Companies)
        # Tickets.objects.get(Flight_ld=Fid).delete()
        return Response({'DELETE': AiD})
    return Response({'DELETE': "You are not in the DELETE method"})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Flights(request, index=-1):
    if int(index) > -1:
        if int(index) > Flights.objects.count():
            return Response({"out of bounds array": "1111"})
        user = request.user
        # single_flights = user.flights.objects.all()[int(id)]
        # airline_Companies=Airline_Companies.objects.all()[int(id)]
        user = request.user
        print(user)
        single_flights = user.flights_set.all()[int(index)]
        print(single_flights)
        serializer = FlightsSerializer(single_flights, many=True)
        print(serializer)
        print(serializer)
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_all_Flights(request,):
    Fobg = Flights.objects.all()
    serializer = FlightsSerializer(Fobg, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_Flights_by_parameters(request, oricounid, dci, dti):
    Fobg = Flights.objects.all().filter(Origin_Country_id=oricounid,Destination_Country_id=dci,Departure_Time=dti)
    serializer = FlightsSerializer(Fobg, many=True)
    print(serializer.data)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFlightsByDeparture_Time(request, Dt,):
    Fobg = Flights.objects.all().filter(Departure_Time=Dt)
    serializer = FlightsSerializer(Fobg, many=True)
    return Response(serializer.data)
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFlightsByDestinationCountryld(request, DciD,):
    if int(DciD) > 0:
        print(DciD)
        user = request.user
        Fobg = Flights.objects.all().filter(Destination_Country_id=DciD)        
        print(user)
        serializer = FlightsSerializer(Fobg, many=True)
        print(serializer)
        return Response(serializer.data)
    else:
        if AttributeError:
            return Response("plese enter the right Destination_Country_id(only numbers above 0) ")
        


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def add_Flights(request):
    print(request.data)
    user = request.user
    Flights.objects.create(Fname=request.data["Fname"],
                           desc=request.data["desc"],
                           price=request.data["price"],
                           Airline_Company_id=request.data["Airline_Company_id"],
                           Origin_Country_id=request.data["Origin_Country_id"],
                           Destination_Country_id=request.data["Destination_Country_id"],
                           Departure_Time=request.data["Departure_Time"],
                           Landing_Time=request.data["Landing_Time"],
                           Remaining_Tickets=request.data["Remaining_Tickets"],
                           user=user)
    print(user)
    flights = user.flights_set.all()
    print(flights)
    serializer = FlightsSerializer(flights, many=True)
    return Response(serializer.data)


@api_view(['PUT', 'GET'])
@permission_classes([IsAuthenticated])
def update_fields_Flights(request, Upd_id):
    # x=request.data["Departure_Time"]
    if request.method == 'PUT':  # method delete a row
        # if date(x) > date_only:
        #         return Response("Put Valid Date")
        print(request.data)
        user = request.user
        Fname = request.data["Fname"]
        desc = request.data["desc"]
        Airline_Company_id = request.data["Airline_Company_id"]
        Origin_Country_id = request.data["Origin_Country_id"]
        Destination_Country_id = request.data["Destination_Country_id"]
        Departure_Time = request.data["Departure_Time"]
        Landing_Time = request.data["Landing_Time"]
        Remaining_Tickets = request.data["Remaining_Tickets"]
        price = request.data["price"]
        # Obtain flights belonging to a user who has logged in and to whom the flight belongs:
        flight = user.flights_set.all()
        flightUP = flight.get(_id=Upd_id,)
        # Origin_Country_id=oricounidUP,Destination_Country_id=DciUP, Airline_Company_id=AciUP
        # Option to update each of the flights, even those that are not owned by the user:
        # flight = Flights.objects.get(Origin_Country_id=oricounidUP,Destination_Country_id=DciUP,Airline_Company_id=AciUP)
        flightUP.Fname = Fname
        flightUP.desc = desc
        flightUP.Airline_Company_id = Airline_Company_id
        flightUP.Origin_Country_id = Origin_Country_id
        flightUP.Destination_Country_id = Destination_Country_id
        flightUP.Departure_Time = Departure_Time
        flightUP.Landing_Time = Landing_Time
        flightUP.Remaining_Tickets = Remaining_Tickets
        flightUP.price = price
        flightUP.save(update_fields=['Airline_Company_id', 'Origin_Country_id',
                      'Destination_Country_id', 'Departure_Time', 'Landing_Time', 'Remaining_Tickets', 'Fname', 'desc', 'price'])
        return Response({"Airline_Company_id": flightUP.Airline_Company_id, "Remaining_Tickets": flightUP.Remaining_Tickets, "Destination_Country_id": flightUP.Destination_Country_id})
    return Response({'DELETE': "You are not in the PUT method"})


@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_Flights(request, fID=-1):
    if request.method == 'DELETE':  # method delete a row
        user = request.user
        flight = user.flights_set.all()
        delf=flight.get(_id=fID)
        delf.delete()
        print(delf)
        # Tickets.objects.get(Flight_ld=Fid).delete()
        return Response( delf.Fname)
    return Response({'DELETE': "You are not in the DELETE method"})


@api_view(['GET', 'POST', 'DELETE', 'PUT'])
# @permission_classes([IsAuthenticated])
def all_Airline_Companies_Crode(request, id=-1):
    if request.method == 'GET':  # method get single
        if int(id) > -1:
            single_Airline_Companie = Airline_Companies.objects.all()[int(id)]
            strAircup = {"contry_id": single_Airline_Companie.contry_id,
                         "name": single_Airline_Companie.name}  # ,"image":singleCar.image.path}
            return Response(strAircup)
        else:  # get all cars
            result = []
            for Airline_Companie in Airline_Companies.objects.all():
                result.append({"id": Airline_Companie._id, "contry_id": Airline_Companie.contry_id,
                              "name": Airline_Companie.name})  # ,"image":car.image.path[0:10]})
            return Response(result)
    # method post add new row (user,desc ,price,image)
    if request.method == 'POST':
        user = request.data['user']
        contry_id = request.data['contry_id']
        name = request.data['name']
        # _id= request.data['_id']
        # image= request.data['image']
        # return JsonResponse({'POST':'success'})
        # validation
        Airline_Companies.objects.create(user=User.objects.all(
        )[0], contry_id=contry_id, name=name)  # ,image=image)
        return Response({'POST': 'success'})
    if request.method == 'DELETE':  # method delete a row
        Airline_Companies.objects.get(_id=id).delete()
        return Response({'DELETE': id})
    if request.method == 'PUT':  # method delete a row
        desc = request.data['desc']
        car = Airline_Companies.objects.get(_id=id)
        car.desc = desc
        car.save()
        return Response({"id": car._id, "desc": car.desc, "price": car.price})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_Countries(request):
    print(request.data)
    user = request.user
    Countries.objects.create(
        CName=request.data["Name"], image=request.data["image"], user=user)
    print(user)
    countries = user.countries_set.all()
    print(countries)
    serializer = CountriesSerializer(countries, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Countries(request):
    print("innnn", request.user)
    user = request.user
    print(user)
    countries = user.countries_set.all()
    print(countries)
    serializer = CountriesSerializer(countries, many=True)
    return Response(serializer.data)

# @permission_classes([IsAuthenticated])
# def get_Countries(request):
#     print("innnn", request.user)
#     user = request.user
#     print(user)
#     countries = Tickets.objects.all()
#     # countries = user.countries_set.all()
#     print(countries)
#     serializer = CountriesSerializer(countries, many=True)
#     return JsonResponse(serializer.data,safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Customers(request):
    print("innnn", request.user)
    user = request.user
    print(user)
    customers = user.customers_set.all()
    print(customers)
    serializer = CustomersSerializer(customers, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_Customers(request):
    print(request.data)
    user = request.user
    Customers.objects.create(
        User_ld=request.data["User_ld"],
        First_Name=request.data["First_Name"],
        Last_Name=request.data["Last_Name"],
        Address=request.data["Address"],
        Phone_No=request.data["Phone_No"],
        Credit_Card_No=request.data["Credit_Card_No"],
        user=user)
    print(user)
    customers = user.customers_set.all()
    print(customers)
    serializer = CustomersSerializer(customers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Tickets(request):
    print("innnn", request.user)
    user = request.user
    print(user)
    tickets = user.tickets_set.all()
    print(tickets)
    serializer = TicketsSerializer(tickets, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Tickets_By_Flight_ld(request,gFid):
    user = request.user
    # single_Tickets = Tickets.objects.all().filter(Flight_ld=gFid)
    single_Tickets = user.tickets_set.all().filter(Flight_ld=gFid)
    # single_Tickets.get(Flight_ld=request.data["gFid"])
    serializer = TicketsSerializer(single_Tickets, many=True)
    return Response(serializer.data)
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_Tickets(request):
    print(request.data)
    user = request.user
    single_flights = Flights.objects.get(_id=request.data["Flight_ld"])
    if single_flights.Remaining_Tickets != None:
        if single_flights.Remaining_Tickets > 0:
            print(single_flights.Remaining_Tickets)
            print(single_flights._id)
            single_flights.Remaining_Tickets = single_flights.Remaining_Tickets - 1
            print(single_flights.Remaining_Tickets)
            Tickets.objects.create(
                Flight_ld=request.data["Flight_ld"],
                # Customer_ld=request.data["Customer_ld"],
                Customer_ld=user.id,
                user=user)
            print(user)
            tickets = user.tickets_set.all()
            single_flights.save()
            serializer = TicketsSerializer(tickets, many=True)
            return Response(serializer.data)
        else:
            return Response("no more tickets")
    else:
        return Response("tickets are at None")


@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_Tickets(request, Tid=-1):
    if request.method == 'DELETE':  # method delete a row
        user = request.user
        tickets = user.tickets_set.all()
        z=tickets.get( _id=Tid)
        print(z)
        single_flights = Flights.objects.get(_id=z.Flight_ld)
        # tickets = user.tickets_set.all()
        tickets.get( _id=Tid).delete()
        print(single_flights.Remaining_Tickets)
        single_flights.Remaining_Tickets = single_flights.Remaining_Tickets + 1
        single_flights.save()

        print(single_flights.Remaining_Tickets)
        # Tickets.objects.get(Flight_ld=Fid).delete()
        return Response({'DELETE': Tid})
    return Response({'DELETE': "You are not in the DELETE method"})
    

@api_view(['GET','POST','DELETE','PUT'])
@permission_classes([IsAuthenticated])
def tickets(request,id=-1):
    user = request.user
        
    print(id)
    print(request.user)
    if request.method == 'GET':    #method get all
        if int(id) > -1: #get single product
            single_Tickets= Tickets.objects.get(_id = id)
            serializer = TicketsSerializer(single_Tickets, many=True)
            return JsonResponse({
            serializer.data
            },safe=False)
        else: # return all
            tickets = user.tickets_set.all()
            serializer = TicketsSerializer(tickets, many=True)
            return Response(serializer.data)
            
            # res=[] #create an empty list
            # for tickets in Tickets.objects.all(): #run on every row in the table...
            #     res.append({
            # "desc":order.flights.desc,
            # "price":order.flights.price,
            # "amount":order.amount
            # }) #append row by to row to res list
            # return JsonResponse(res,safe=False) #return array as json response
    if request.method == 'POST': #method post add new row
        print(request.data)
        user = request.user
        single_flights = Flights.objects.get(_id=request.data["Flight_ld"])
        if single_flights.Remaining_Tickets != None:
            if single_flights.Remaining_Tickets > 0:
                print(single_flights.Remaining_Tickets)
                print(single_flights._id)
                single_flights.Remaining_Tickets = single_flights.Remaining_Tickets - 1
                print(single_flights.Remaining_Tickets)
                Tickets.objects.create(
                    Flight_ld=request.data["Flight_ld"],
                    # Customer_ld=request.data["Customer_ld"],
                    Customer_ld=user.id,
                    user=user)
                print(user)
                tickets = user.tickets_set.all()
                single_flights.save()
                serializer = TicketsSerializer(tickets, many=True)
                return Response(serializer.data)
            else:
                return Response("no more tickets")
        else:
            return Response("tickets are at None")
        # print(request.data['pid'])
        # temp =request.data['pid']
        # flights= Flights.objects.get(_id=temp)
        # Order.objects.create(flights= flights,amount=request.data['amount'],user= request.user)
        # return JsonResponse({'order':"created"})
    if request.method == 'DELETE':  # method delete a row
        user = request.user
        tickets = user.tickets_set.all()
        z=tickets.get( _id=id)
        print(z)
        single_flights = Flights.objects.get(_id=z.Flight_ld)
        # tickets = user.tickets_set.all()
        tickets.get( _id=id).delete()
        print(single_flights.Remaining_Tickets)
        single_flights.Remaining_Tickets = single_flights.Remaining_Tickets + 1
        single_flights.save()

        print(single_flights.Remaining_Tickets)
        # Tickets.objects.get(Flight_ld=Fid).delete()
        return Response({'DELETE': id})
   
        # temp= Order.objects.get(_id = id)
        # temp.delete()
        # return JsonResponse({'DELETE': id})
    # if request.method == 'PUT': #method delete a row
    #     temp=Tickets.objects.get(_id = id)
    #     temp.amount =request.data['amount']
    #     temp.save()
    #     return JsonResponse({'PUT': id})











# desc ,price,prodName,createdTime, _id
@api_view(['GET','POST','DELETE','PUT'])
@permission_classes([IsAuthenticated])
def orders(request,id=-1):
    print(request.user)
    if request.method == 'GET':    #method get all
        if int(id) > -1: #get single product
            order= Order.objects.get(_id = id)
            return JsonResponse({
            "desc":order.flights.desc,
            "price":order.flights.price,
            "amount":order.amount
            },safe=False)
        else: # return all
            res=[] #create an empty list
            for order in Order.objects.all(): #run on every row in the table...
                res.append({
            "desc":order.flights.desc,
            "price":order.flights.price,
            "amount":order.amount
            }) #append row by to row to res list
            return JsonResponse(res,safe=False) #return array as json response
    if request.method == 'POST': #method post add new row
        print(request.data['pid'])
        temp =request.data['pid']
        flights= Flights.objects.get(_id=temp)
        Order.objects.create(flights= flights,amount=request.data['amount'],user= request.user)
        return JsonResponse({'order':"created"})
    if request.method == 'DELETE': #method delete a row
        temp= Order.objects.get(_id = id)
        temp.delete()
        return JsonResponse({'DELETE': id})
    if request.method == 'PUT': #method delete a row
        temp=Order.objects.get(_id = id)
        temp.amount =request.data['amount']
        temp.save()
        return JsonResponse({'PUT': id})