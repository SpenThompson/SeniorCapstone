from django.contrib import admin
from .models import AvailableGame, AvailablePlayer, Homebrew, DiceSet

class GameAdmin(admin.ModelAdmin):
    list = ("firstName", "lastName", "pronouns", "email", "experience", "contentWarnings", "contentAllowed", "description", "created_at")

class PlayerAdmin(admin.ModelAdmin):
    list = ("firstName", "lastName", "pronouns", "email", "experience", "contentWarnings", "created_at")

class HomebrewAdmin(admin.ModelAdmin):
    list = ("firstName", "lastName", "pronouns", "email", "type", "name", "description", "created_at")

class DiceAdmin(admin.ModelAdmin):
    list = ("dice_id", "dice_description", "dice_rented", "firstName", "lastName", "pronouns", "email", "checkout_date", "due_date")


admin.site.register(AvailableGame, GameAdmin)
admin.site.register(AvailablePlayer, PlayerAdmin)
admin.site.register(Homebrew, HomebrewAdmin)
admin.site.register(DiceSet, DiceAdmin)
# Register your models here.
