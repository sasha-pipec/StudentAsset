from django.urls import path

from api.views.event.views import EventCreateView

urlpatterns = [
    path('create_event/', EventCreateView.as_view(), name="create_event")
]
