from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django import forms
from django.core.mail import EmailMessage
from django.template.loader import get_template

def landing(request):
    return render(request, "home/landing.html")
# Create your views here.
