# Generated by Django 5.0.6 on 2024-05-17 04:20

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tareas', '0005_rename_done_task_completada_rename_title_task_text_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='fecha',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]