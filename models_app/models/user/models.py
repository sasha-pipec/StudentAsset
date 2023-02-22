# -*- coding: utf8 -*-
from django.contrib.auth.models import AbstractUser
from django.db import models

from django.utils.translation import gettext_lazy as _
from .manager import CustomUserManager


class User(AbstractUser):
    """Overriding the User model with the email field as primary"""

    student = 'student'
    stud_asset = 'stud_asset'
    teacher = 'teacher'
    chairman = 'chairman'

    TYPE = [
        (student, 'Студент'),
        (stud_asset, 'Студ. совет'),
        (teacher, 'Преподаватель'),
        (chairman, 'Председатель'),
    ]

    username = models.CharField(
        max_length=150,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        error_messages={
            "unique": _("A user with that username already exists."),
        }, verbose_name="Username",
        unique=True,
    )
    API_Key = models.CharField(max_length=255, unique=True, blank=True, null=True, verbose_name='Токен')
    group = models.CharField(max_length=255, blank=True, null=True, verbose_name='Группа')
    role = models.CharField(max_length=20, choices=TYPE, default=student, verbose_name='Роль')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'
        app_label = "models_app"
        verbose_name = 'User'
        verbose_name_plural = 'Users'
