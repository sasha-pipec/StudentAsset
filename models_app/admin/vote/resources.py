from django.contrib import admin

from models_app.models import Vote


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "user",
        "choice",
        "event",
    ]
    list_display = [
        "id",
        "user",
        "choice",
        "event",
    ]
    readonly_fields = ["id", ]
    list_display_links = (
        "id",
        "user",
    )
    ordering = ("id", "choice")
