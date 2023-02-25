from django.urls import path
from conf.yasg import urlpatterns as doc_urls

from api.views.like import LikeCreateDeleteView
from api.views.post import PostCreateListView
from api.views.post import PostShowChangeDeleteView
from api.views.user import UserLoginView, UserListView, UserShowView
from api.views.user import UserMuteView
from api.views.event import EventCreateListView
from api.views.event import EventApproveView
from api.views.event import EventDeleteView
from api.views.event import EventVoteView
from api.views.thread import ThreadListCreateView, ThreadRetrieveUpdateDestroyView, ThreadCloseView, ThreadPinnedView

urlpatterns = [
    # post
    path('posts/', PostCreateListView.as_view(), name="posts"),
    path('posts/<int:id>/', PostShowChangeDeleteView.as_view(), name="posts_id"),
    path('posts/<int:id>/like_toggle/', LikeCreateDeleteView.as_view(), name="post_like"),

    # events
    path('events/', EventCreateListView.as_view(), name="events"),
    path('events/<int:id>/', EventDeleteView.as_view(), name="delete_event"),
    path('events/<int:id>/approve/', EventApproveView.as_view(), name="approve_event"),
    path('events/<int:id>/vote/', EventVoteView.as_view(), name="vote_event"),

    # users
    path('users/', UserListView.as_view(), name="users"),
    path('users/<int:id>/', UserShowView.as_view(), name="get_users"),
    path('users/login/', UserLoginView.as_view(), name="login_users"),
    path('users/<int:id>/mute_toggle/', UserMuteView.as_view(), name="mute_users"),

    # threads
    path('threads/', ThreadListCreateView.as_view(), name="threads"),
    path('threads/<int:id>', ThreadRetrieveUpdateDestroyView.as_view()),
    path('threads/<int:id>/close/', ThreadCloseView.as_view()),
    path('threads/<int:id>/pinned/', ThreadPinnedView.as_view()),
]

urlpatterns += doc_urls
