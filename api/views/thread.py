from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from service_objects.services import ServiceOutcome
from api.services.thread.create import ThreadCreateService
from api.services.thread.show import ThreadShowService
from api.services.thread.patch import ThreadUpdateService
from api.services.thread.delete import ThreadDeleteService
from api.services.thread.list import ThreadListServices
from api.services.thread.close import ThreadCloseService
from api.services.thread.pinned import ThreadPinnedService
from api.serializers.thread.list import ThreadSerializers


class ThreadListCreateView(APIView):

    def get(self, request):
        outcome = ServiceOutcome(ThreadListServices, {**request.query_params.dict() | {'user': request.user}})
        return Response(
            {
                "Threads": ThreadSerializers(outcome.result.get('object_list'), many=True).data,
                'page_data': outcome.result.get('page_range'),
                'page_info': outcome.result.get('page_info'),
            },
            status=status.HTTP_200_OK
        )

    def post(self, request):
        outcome = ServiceOutcome(ThreadCreateService, {**request.data | request.POST.dict() | {'user': request.user}})
        return Response(ThreadSerializers(outcome.result).data, status=status.HTTP_200_OK)


class ThreadRetrieveUpdateDestroyView(APIView):

    def get(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadShowService, kwargs | {'user': request.user})
        return Response(ThreadSerializers(outcome.result).data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadUpdateService, kwargs |
                                 {**request.data | request.POST.dict() | {'user': request.user}})
        return Response(ThreadSerializers(outcome.result).data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadDeleteService, kwargs | {'user': request.user})
        return Response({"message": outcome.result}, status=status.HTTP_204_NO_CONTENT)


class ThreadCloseView(APIView):

    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadCloseService, kwargs | {'user': request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)


class ThreadPinnedView(APIView):

    def patch(self, request, *args, **kwargs):
        outcome = ServiceOutcome(ThreadPinnedService, kwargs | {'user': request.user})
        return Response({"INFO": outcome.result}, status=status.HTTP_200_OK)
