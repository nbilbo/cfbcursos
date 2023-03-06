import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from django.shortcuts import render
from django.http import HttpResponse


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'clima': reverse('clima', request=request, format=format)
    })


@api_view(['GET'])
def clima(request, format=None):
    data ={
        'temperatura': random.randint(-10, 45),
        'nivel': random.randint(0, 10),
        'pressao': random.randint(0, 10)
    }

    if request.method == 'GET':
        return Response(data)
