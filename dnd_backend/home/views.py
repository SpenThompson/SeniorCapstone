from .models import AvailableGame, AvailablePlayer, Homebrew, DiceSet
from .serializers import AvailableGameSerializer, AvailablePlayerSerializer, HomebrewSerializer, DiceSerializer
from rest_framework import viewsets

class AvailableGameListCreate(viewsets.ModelViewSet):
    queryset = AvailableGame.objects.all()
    serializer_class = AvailableGameSerializer

class AvailablePlayerListCreate(viewsets.ModelViewSet):
    queryset = AvailablePlayer.objects.all()
    serializer_class = AvailablePlayerSerializer

class HomebrewListCreate(viewsets.ModelViewSet):
    queryset = Homebrew.objects.all()
    serializer_class = HomebrewSerializer

class DiceSetListCreate(viewsets.ModelViewSet):
    queryset = DiceSet.objects.all()
    serializer_class = DiceSerializer

# Create your views here.
