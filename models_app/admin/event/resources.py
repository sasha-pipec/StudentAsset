from django.contrib import admin
from django.contrib.admin import TabularInline

from models_app.models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Общая информация", {'fields': ['title', 'description', 'date', 'status', 'image']}),
        ('Прочая информация',
         {'fields': ['created_at', 'updated_at', 'user']}),
    ]
    list_filter = ('date', 'status', 'created_at')
    list_display = [
        "id",
        "title",
        "date",
        "status",
    ]
    readonly_fields = ["id", "date", "created_at", "updated_at"]
    list_display_links = (
        "id",
        "title",
    )
    ordering = ("id", "created_at", "updated_at")
