from rest_framework import serializers
from .models import Project, task

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        field = '__all__'
        
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = task
        fields = '__all__'