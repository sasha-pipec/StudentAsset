from rest_framework import serializers
from models_app.models.comment.models import Comment
from api.serializers.user.show import UserShowSerializer


class CommentCreateSerializer(serializers.ModelSerializer):
    user = UserShowSerializer()

    class Meta:
        model = Comment
        fields = ('id', 'text', 'user', 'created_at', 'updated_at', 'answer_to')
