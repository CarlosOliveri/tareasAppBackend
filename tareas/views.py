#from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import ProjectSerializer,TaskSerializer
from .models import Project,task

# Create your views here.

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = task.objects.all()