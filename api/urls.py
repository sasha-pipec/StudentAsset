from django.urls import path
from api.views.user import UserGetView
from api.views.event import EventCreateView
from api.views.event import EventVoteView

urlpatterns = [
    path('create_event/', EventCreateView.as_view(), name="create_event"),
    path('events/<int:id>/vote/', EventVoteView.as_view(), name="vote_event"),

    # users
    path('users/', UserGetView.as_view()),
]
