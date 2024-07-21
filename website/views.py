from django.shortcuts import render
import telebot
TELEGRAM_BOT_TOKEN ='7212846432:AAFmFxH5sK0Y2AGc-HWQR18fpUyZIHfNgb0'
TELEGRAM_CHAT_ID = '-4284612896'
bot = telebot.TeleBot(TELEGRAM_BOT_TOKEN)

def index(request):
    if request.method == "POST":
        email = request.POST.get('Email')
        phone = request.POST.get('phone')
        message = f"Новый заказ!\nEmail: {email}\nТелефон: {phone}\n"
        bot.send_message(TELEGRAM_CHAT_ID, message)
    return render(request,'index.html')