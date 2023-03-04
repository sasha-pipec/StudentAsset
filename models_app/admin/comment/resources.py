from django.contrib import admin

from models_app.models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_filter = ('user', 'created_at')
    list_display = [
        "id",
        "text",
        "thread",
    ]
    list_display_links = (
        "id",
    )
    ordering = ("id", "created_at", "updated_at")
