from django.urls import path
from api.views.user import UserGetView
from api.views.event import EventCreateListView
from api.views.event import EventApproveView
from api.views.event import EventCancelView
from api.views.event import EventVoteView

urlpatterns = [
    # events
    path('events/', EventCreateListView.as_view(), name="events"),
    path('events/<int:id>/approve/', EventApproveView.as_view(), name="approve_event"),
    path('events/<int:id>/cancel/', EventCancelView.as_view(), name="cancel_event"),
    path('events/<int:id>/vote/', EventVoteView.as_view(), name="vote_event"),

    # users
    path('users/', UserGetView.as_view()),
]
