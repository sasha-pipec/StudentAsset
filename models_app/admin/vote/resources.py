from django.contrib import admin

from models_app.models import Vote


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "selection",
    ]
    list_filter = ('selection', )
    list_display = [
        "id",
        "selection",
    ]
    readonly_fields = ["id", ]
    list_display_links = (
        "id",
        "selection",
    )
    ordering = ("id", "selection", )
