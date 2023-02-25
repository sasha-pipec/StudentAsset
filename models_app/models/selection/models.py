# -*- coding: utf8 -*-
from django.db import models


class Selection(models.Model):
    """Selection model"""

    title = models.CharField(max_length=100, verbose_name='Заголовок')
    event = models.ForeignKey('Event', on_delete=models.CASCADE, related_name="events", verbose_name='Событие')

    def __str__(self):
        return f"{self.id} {self.title}"

    class Meta:
        db_table = 'selections'
        app_label = "models_app"
        verbose_name = 'Selection'
        verbose_name_plural = 'Selections'