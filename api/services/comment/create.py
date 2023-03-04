from django import forms
from service_objects.services import ServiceWithResult
from service_objects.fields import ModelField
from models_app.models import Comment, User, Thread


class CommentCreateService(ServiceWithResult):
    text = forms.CharField(min_length=5)
    answer_to = forms.IntegerField(required=False)
    id = forms.IntegerField()
    user = ModelField(User)

    custom_validations = []

    def process(self):
        self.result = self._created_comment
        return self

    @property
    def _created_comment(self):
        return Comment.objects.create(
            text=self.cleaned_data['text'],
            thread=self._get_thread(),
            answer_to=self.check_comment_to_answer(),
            user=self.cleaned_data['user']
        )

    def _get_thread(self):
        return Thread.objects.get(id=self.cleaned_data['id'])

    def check_comment_to_answer(self):
        return Comment.objects.get(pk=self.cleaned_data['answer_to']) if self.cleaned_data['answer_to'] else None
