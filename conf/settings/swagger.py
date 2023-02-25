# Swagger config

SWAGGER_SETTINGS = {
    "DOC_EXPANSION": "list",
    "SHOW_EXTENSIONS": True,
    "USE_SESSION_AUTH": False,
    "TAGS_SORTER": "alpha",
    "OPERATIONS_SORTER": "method",
    "DEFAULT_MODEL_RENDERING": "example",
    "SECURITY_DEFINITIONS": {
        "Token": {"type": "apiKey", "name": "token", "in": "header"},
    },
}
