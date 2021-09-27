from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django import forms
from django.core.mail import EmailMessage
from django.template.loader import get_template

def landing(request):
    return render(request, "home/landing.html")

def members(request):
    return render(request, "home/members.html")

def information(request):
    return render(request, "home/information.html")

def services(request):
    return render(request, "home/services.html")

def contact(request):
    return render(request, "home/contact.html")
# Create your views here.
