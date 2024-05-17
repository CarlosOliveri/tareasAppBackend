from django.contrib import admin
from .models import Project,task
# Register your models here.
admin.site.register(task)
admin.site.register(Project)