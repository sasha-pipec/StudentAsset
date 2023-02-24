"""
This is a django-split-settings main file.
For more information read this:
https://github.com/sobolevn/django-split-settings
Default environment is `developement`.
To change settings file:
`DJANGO_ENV=production python manage.py runserver`
"""
from split_settings.tools import include

settings = [
    "django.py",  # standard django settings
    "database.py",  # postgres
    "rest_framework.py",  # rest-framework settings
    "swagger.py",  # swagger settings
]

# Include settings:
include(*settings)
