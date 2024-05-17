from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length = 10)
    descripcion = models.TextField()
    
    def __str__(self):
        return self.name 
    
class task(models.Model):
    text = models.CharField(max_length = 200)
    proyecto = models.ForeignKey(Project, on_delete = models.CASCADE, null = True, blank = True)
    prioridad = models.CharField(max_length = 5)
    fecha = models.DateTimeField()
    completada = models.BooleanField(default = False)
    
    
    def __str__(self):
        return self.text