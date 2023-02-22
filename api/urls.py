from django.urls import path
from api.views.user import UserGetView

urlpatterns = [
    # users
    path('users/', UserGetView.as_view()),
]
