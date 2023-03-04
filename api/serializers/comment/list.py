from django.db.models import Value
from rest_framework import serializers

from models_app.models import Comment
from api.serializers.user.show import UserShowSerializer
from api.services.comment.list import can_be_deleted_and_changing


class CommentListSerializer(serializers.ModelSerializer):
    user = UserShowSerializer()
    can_be_deleted = serializers.BooleanField()
    can_be_changed = serializers.BooleanField()
    answers = serializers.SerializerMethodField()

    def get_answers(self, obj):
        comments = Comment.objects.filter(answer_to=obj.id).annotate(
            can_be_deleted=Value(False), can_be_changed=Value(False)
        )
        if self.context['user']:
            comments = can_be_deleted_and_changing(comments, self.context['user'])
        return (CommentListSerializer(comments, context={'user': self.context['user'],
                                                         'request': self.context['request']}, many=True)).data

    class Meta:
        model = Comment
        fields = ('id',
                  'text',
                  'user',
                  'thread',
                  'created_at',
                  'updated_at',
                  'answer_to',
                  'answers',
                  'can_be_changed',
                  'can_be_deleted'
                  )
