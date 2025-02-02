from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

client = OpenAI()

# Initialize your chatbot instance here
# For example, if you're using ChatterBot:
# from chatterbot import ChatBot
# chatbot = ChatBot('YourChatBotName')

@csrf_exempt
def chatbot_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_input = data.get('message')
            # Generate chatbot response
            # For example, if using ChatterBot:
            # bot_response = chatbot.get_response(user_input).text
            bot_response = "This is a placeholder response."  # Replace with actual chatbot response
            return JsonResponse({'response': bot_response})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return render(request, 'chatbot/chat_interface.html')
    
# views.py
from django.http import JsonResponse

def generate_gpt_response(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=150,
            temperature=0.7,
        )
        return response.choices[0].message['content']
    except Exception as e:
        return f"An error occurred: {str(e)}"

