from django.shortcuts import render


def index(request):
    return render(request, 'home.html')

def threeJSBlob(request):
    return render(request, 'three-js-blob.html')