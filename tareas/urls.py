from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tareas import views

router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')
router.register(r'projects',views.ProjectView,'projects')

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path('docs/', include_docs_urls(title = 'Tasks API'))
] 

#Genera: Get,Post, Up,Delete