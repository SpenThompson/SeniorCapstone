from django.urls import path
from home import views
from . import views

urlpatterns = [
    path("", views.landing, name="landing"),
    path("members", views.members, name="members"),
    path("information", views.information, name="information"),
    path("services", views.services, name="services"),
    path("contact", views.contact, name="contact")

]
