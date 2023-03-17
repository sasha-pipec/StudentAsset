from functools import lru_cache

from django import forms
from rest_framework import status
from service_objects.errors import AccessDenied
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models import Comment, User


class CommentDeleteService(ServiceWithResult):
    comment_id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = ["check_answers"]

    def process(self):
        self.run_custom_validations()
        self.result = self._deleted_comment
        return self

    def check_answers(self):
        if Comment.objects.filter(answer_to=self._get_comment):
            raise AccessDenied(message="Sorry but you cant delete this comment, because he have answers",
                               response_status=status.HTTP_403_FORBIDDEN)

    @property
    def _deleted_comment(self):
        self._get_comment.delete()
        return "comment successfully deleted"

    @property
    @lru_cache()
    def _get_comment(self):
        return Comment.objects.get(id=self.cleaned_data['comment_id'], user=self.cleaned_data['user'])
