from django.urls import path

from .views import *


urlpatterns = [
    path(r'', index, name='index'),
    path(r'posts/three-js-blob', threeJSBlob, name="three-js-blob")
]