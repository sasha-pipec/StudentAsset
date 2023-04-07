from django.contrib import admin

from models_app.models import Like


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_filter = ('user', 'created_at', "post")
    readonly_fields = ("id", "created_at", "updated_at")
    fields = (
        "id",
        "post",
        "user",
        "created_at",
        "updated_at",
    )
    list_display = [
        "id",
        "post",
        "user",
        "created_at",
        "updated_at",
    ]
    list_display_links = (
        "id",
        "post",
    )
    ordering = ("id", "created_at", "updated_at")
