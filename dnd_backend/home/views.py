from .models import AvailableGame, AvailablePlayer, Homebrew
from .serializers import AvailableGameSerializer, AvailablePlayerSerializer, HomebrewSerializer
from rest_framework import generics

class AvailableGameListCreate(generics.ListCreateAPIView):
    queryset = AvailableGame.objects.all()
    serializer_class = AvailableGameSerializer

class AvailablePlayerListCreate(generics.ListCreateAPIView):
    queryset = AvailablePlayer.objects.all()
    serializer_class = AvailablePlayerSerializer

class HomebrewListCreate(generics.ListCreateAPIView):
    queryset = Homebrew.objects.all()
    serializer_class = HomebrewSerializer

# Create your views here.
