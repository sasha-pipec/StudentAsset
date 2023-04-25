# -*- coding: utf8 -*-
from django.db import models


class Event(models.Model):
    """Event model"""

    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.CharField(max_length=300, verbose_name="Описание")
    date = models.DateTimeField(max_length=300, auto_now_add=True, blank=True, verbose_name="Предположительная дата")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    ON_MODERATION = 'Moderation'
    APPROVED = 'Approved'

    STATUS_CHOICES = (
        (ON_MODERATION, 'На модерации'),
        (APPROVED, 'Одобрено'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, verbose_name='Статус', default=ON_MODERATION)
    user = models.ForeignKey("User", on_delete=models.SET_NULL, verbose_name='Пользователь', null=True)
    image = models.ImageField(upload_to="events/", verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'events'
        app_label = "models_app"
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
