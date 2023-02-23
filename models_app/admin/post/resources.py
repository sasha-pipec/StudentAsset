from django.contrib import admin

from models_app.models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    fields = [
        "id",
        "title",
        "description",
        "image",
        "date",
        "user",
    ]
    list_display = [
        "id",
        "title",
        "date",
        "image",
        "user",
    ]
    readonly_fields = ["id", "created_at", "updated_at", "date"]
    list_display_links = (
        "id",
        "title",
    )
    ordering = ("id", "user")
