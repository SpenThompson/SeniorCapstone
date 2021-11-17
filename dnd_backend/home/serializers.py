from rest_framework import serializers
from .models import AvailableGame, AvailablePlayer, Homebrew

class AvailableGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableGame
        fields = ("id", "firstName", "lastName", "pronouns", "email", "experience", "contentWarnings", \
         "contentAllowed", "description")

class AvailablePlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailablePlayer
        fields = ("id", "firstName", "lastName", "pronouns", "email", "experience", "contentWarnings")

class HomebrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homebrew
        fields = ("id", "firstName", "lastName", "pronouns", "email", "type", "name", "description")