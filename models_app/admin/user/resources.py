from django.contrib import admin

from models_app.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = [
        "username",
        "API_Key",
        "group",
        "role",
        "is_muted",
        "created_at",
        "updated_at",
    ]
    list_display = [
        "id",
        "username",
    ]
    readonly_fields = ["id", "created_at", "updated_at"]
    list_display_links = (
        "id",
        "username",
    )
    ordering = ("id", "created_at", "updated_at")
