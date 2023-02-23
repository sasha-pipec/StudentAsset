from django.contrib import admin

from models_app.models import Thread


@admin.register(Thread)
class ThreadAdmin(admin.ModelAdmin):
    list_filter = ('status', 'created_at')
    list_display = [
        "id",
        "title",
        "status",
    ]
    readonly_fields = ["id", "created_at", "updated_at"]
    list_display_links = (
        "id",
        "title",
    )
    ordering = ("id", "created_at", "updated_at")
