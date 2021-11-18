from django.urls import path
from home import views
from . import views

urlpatterns = [
    path("api/availablegame", views.AvailableGameListCreate.as_view() ),
    path("api/availableplayer", views.AvailablePlayerListCreate.as_view() ),
    path("api/homebrew", views.HomebrewListCreate.as_view())
]
