from drf_yasg import openapi

USER_ITEM = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties=dict(
        id=openapi.Schema(
            type=openapi.TYPE_INTEGER, example=1
        ),
        username=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
        first_name=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
        last_name=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
        group=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
        role=openapi.Schema(type=openapi.TYPE_STRING, example="string"),
        is_muted=openapi.Schema(type=openapi.TYPE_BOOLEAN, example="false"),
    ),
)
