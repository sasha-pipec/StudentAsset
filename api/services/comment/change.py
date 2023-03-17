from django import forms
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models import Comment, User


class CommentChangeService(ServiceWithResult):
    text = forms.CharField(min_length=5)
    comment_id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = []

    def process(self):
        self.result = self._changed_comment
        return self

    @property
    def _changed_comment(self):
        comment = self._get_comment
        comment.text = self.cleaned_data['text']
        comment.save()
        return comment

    @property
    def _get_comment(self):
        return Comment.objects.get(id=self.cleaned_data['comment_id'], user=self.cleaned_data['user'])
