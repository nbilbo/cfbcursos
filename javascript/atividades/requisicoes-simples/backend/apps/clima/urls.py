from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import api_root, clima


urlpatterns = [
    path('', api_root, name='api-root'),
    path('clima/', clima, name='clima'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
