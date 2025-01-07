from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def contact(request):
    return render(request, 'contact.html')

def products(request):
    # Logic to retrieve and display products can be added here
    return render(request, 'products.html')

from django.shortcuts import render

def chat_forum(request):
    """
    View function to render the Chat Forum page.
    """
    return render(request, 'chat_forum.html')  # 'chat_forum.html' is the name of your HTML file


