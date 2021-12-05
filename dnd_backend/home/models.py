from django.db import models

# Create your models here.

class AvailableGame(models.Model):
    firstName = models.CharField(max_length = 20)
    lastName = models.CharField(max_length = 30)
    pronouns = models.CharField(max_length = 10)
    email = models.EmailField()
    experience = models.CharField(max_length = 10)
    contentWarnings = models.CharField(max_length = 100)
    contentAllowed = models.CharField(max_length = 30)
    description = models.CharField(max_length = 300)
    created_at = models.DateTimeField(auto_now_add = True)

class AvailablePlayer(models.Model):
    firstName = models.CharField(max_length = 20)
    lastName = models.CharField(max_length = 30)
    pronouns = models.CharField(max_length = 10)
    email = models.EmailField()
    experience = models.CharField(max_length = 10)
    contentWarnings = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)

class Homebrew(models.Model):
    # Author Details
    firstName = models.CharField(max_length = 20)
    lastName = models.CharField(max_length = 30)
    pronouns = models.CharField(max_length = 10)
    email = models.EmailField()
    # The Nitty Gritty
    type = models.CharField(max_length = 10)
    name = models.CharField(max_length = 20)
    description = models.CharField(max_length = 500)
    created_at = models.DateTimeField(auto_now_add = True)

class DiceSet(models.Model):
    dice_id = models.CharField(max_length = 3)
    dice_description = models.CharField(max_length = 30)
    dice_rented = models.BooleanField()
    firstName = models.CharField(max_length = 20)
    lastName = models.CharField(max_length = 30)
    pronouns = models.CharField(max_length = 10)
    email = models.EmailField()
    checkout_date = models.DateTimeField()
    due_date = models.DateTimeField()