from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


app_name = 'user'

urlpatterns = [
    path('', views.test),
    path('generateUser', views.generateUser),
    path('getLast', views.getLastAdded),
    path('queryUser', views.queryUser)

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)