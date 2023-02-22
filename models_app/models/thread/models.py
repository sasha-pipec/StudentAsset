# -*- coding: utf8 -*-
from django.db import models


class Thread(models.Model):
    """Thread model"""

    title = models.CharField(max_length=100, verbose_name='Заголовок')
    description = models.CharField(max_length=300, verbose_name="Описание")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    OPEN = 'Open'
    CLOSE = 'Close'

    STATUS_CHOICES = (
        (OPEN, 'Открыт'),
        (CLOSE, 'Закрыт'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, verbose_name='Статус', default=OPEN)
    pinned = models.BooleanField(default=False, verbose_name='Закреплено')
    user = models.ForeignKey("User", on_delete=models.SET_NULL, verbose_name='Пользователь', null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'threads'
        app_label = "models_app"
        verbose_name = 'Thread'
        verbose_name_plural = 'Threads'