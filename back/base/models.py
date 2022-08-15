from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import validate_image_file_extension

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Pita(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()
# Create your models here.


class Airline_Companies(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    ACname = models.CharField(max_length=50, null=True, blank=True)
    desc = models.CharField(max_length=50,null=True,blank=True)
    contry_id = models.IntegerField(blank=True, null=True)
    contry_name = models.CharField(max_length=50,null=True,blank=True)
    createdTime = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)


class Flights(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    Fname = models.CharField(max_length=50, null=True, blank=True)
    desc = models.CharField(max_length=50,null=True,blank=True)
    Airline_Company_id = models.IntegerField(blank=True, null=True)
    Origin_Country_id = models.IntegerField(blank=True, null=True)
    Destination_Country_id = models.IntegerField(blank=True, null=True)
    Origin_Country_name = models.CharField(max_length=50,null=True,blank=True)
    Destination_Country_name = models.CharField(max_length=50,null=True,blank=True)
    Departure_Time = models.DateField(null=True, blank=True)
    Landing_Time = models.DateField( null=True, blank=True)
    Remaining_Tickets = models.IntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    _id = models.AutoField(primary_key=True, editable=False)


class Customers (models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    User_ld = models.CharField(max_length=50, null=True, blank=True)
    First_Name = models.CharField(max_length=50, null=True, blank=True)
    Last_Name = models.CharField(max_length=50, null=True, blank=True)
    Address = models.CharField(max_length=50, null=True, blank=True)
    Phone_No = models.CharField(max_length=50, null=True, blank=True)
    Credit_Card_No = models.CharField(max_length=50, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


class Tickets (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    Flight_ld = models.IntegerField(blank=True, null=True)
    Customer_ld = models.IntegerField(blank=True, null=True)
    _id = models.AutoField(primary_key=True, editable=False)


class Countries  (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    CName = models.CharField(max_length=50, null=True, blank=True)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png',validators=[validate_image_file_extension])
    _id = models.AutoField(primary_key=True, editable=False)



class Order(models.Model):
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    flights =models.ForeignKey(Flights,on_delete=models.SET_NULL,null=True)
    amount = models.IntegerField()
    createdTime=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)
    