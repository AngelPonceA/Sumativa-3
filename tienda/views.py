from django.shortcuts import render

# Create your views here.

def tienda(request):
    context = {}
    return render (request, 'tienda/tienda.html', context)

