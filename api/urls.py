from django.urls import path
from api.views.user import UserGetView
from api.views.event import EventCreateView
from api.views.event import EventApproveView

urlpatterns = [
    # events
    path('events/', EventCreateView.as_view(), name="create_event"),
    path('events/<int:id>/approve/', EventApproveView.as_view(), name="approve_event"),
    path('events/<int:id>/cancel/', EventCreateView.as_view(), name="cancel_event"),

    # users
    path('users/', UserGetView.as_view()),
]
