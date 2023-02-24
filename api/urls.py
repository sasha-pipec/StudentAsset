from django.urls import path

from api.views.like import LikeCreateDeleteView
from api.views.post import PostCreateListView
from api.views.post import PostShowChangeDeleteView
from api.views.user import UserGetView
from api.views.event import EventCreateListView
from api.views.event import EventApproveView
from api.views.event import EventCancelView
from api.views.event import EventVoteView

urlpatterns = [
    # post
    path('posts/', PostCreateListView.as_view(), name="posts"),
    path('posts/<int:id>/', PostShowChangeDeleteView.as_view(), name="posts_id"),
    path('posts/<int:id>/like_toggle/', LikeCreateDeleteView.as_view(), name="post_like"),

    # events
    path('events/', EventCreateListView.as_view(), name="events"),
    path('events/<int:id>/approve/', EventApproveView.as_view(), name="approve_event"),
    path('events/<int:id>/cancel/', EventCancelView.as_view(), name="cancel_event"),
    path('events/<int:id>/vote/', EventVoteView.as_view(), name="vote_event"),

    # users
    path('users/', UserGetView.as_view()),
]
