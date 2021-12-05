from rest_framework import serializers
from .models import AvailableGame, AvailablePlayer, Homebrew, DiceSet

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

class DiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiceSet
        fields = ("dice_id", "dice_description", "dice_rented", "firstName", "lastName", "pronouns", \
         "email", "checkout_date", "due_date")