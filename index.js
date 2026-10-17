require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Merhaba Yunus! 🚀 Coin istemem, direkt çalışırım.");
});

bot.onText(/\/yardim/, (msg) => {
  bot.sendMessage(msg.chat.id, "Komutlar:\n/start - Botu başlat\n/yardim - Yardım menüsü");
});
