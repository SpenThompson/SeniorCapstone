from .models import AvailableGame, AvailablePlayer, Homebrew, DiceSet
from .serializers import AvailableGameSerializer, AvailablePlayerSerializer, HomebrewSerializer, DiceSerializer
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

class DiceSetListCreate(generics.ListCreateAPIView):
    queryset = DiceSet.objects.all()
    serializer_class = DiceSerializer

# Create your views here.
