from django.shortcuts import render
from .models import Profile
from .forms import LoginForm, SignUpForm, ProfileForm

# Create your views here.
def Login(requests):
    return render(requests, 'Login.html')

def Register(requests):
    return render(requests, 'Register.html')

def Logout(requests):
    return render(requests, 'Logout.html')

def Dashboard(requests):
    return render(requests, 'Dashboard.html')