const { Telegraf, Markup } = require('telegraf');
const path = require('path');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf('7360948566:AAFeisekpxjJE9kUzEQ3p8nJJBviTq9UHrw');

// Helper function to get the image path
const imagePath = (fileName) => path.join(__dirname, 'images', fileName);

bot.start((ctx) => {
  ctx.replyWithPhoto({ source: imagePath('pinkblum.png') }, {
    caption: 'Welcome!',
    reply_markup: {
      inline_keyboard: [
        [
        { text: 'Open Mini App', web_app: { url: 'https://new-blum.vercel.app/' } },
          { text: 'Button 2', callback_data: 'pinkblum.png' }
        ]
      ]
    }
  });
});

bot.action('btn1', (ctx) => {
  ctx.replyWithPhoto({ source: imagePath('pinkblum.png') }, {
    caption: 'You pressed Button 1!',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Back', callback_data: 'back' }
        ]
      ]
    }
  });
});

bot.action('btn2', (ctx) => {
  ctx.replyWithPhoto({ source: imagePath('pinkblum.png') }, {
    caption: 'You pressed Button 2!',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Back', callback_data: 'back' }
        ]
      ]
    }
  });
});

bot.action('back', (ctx) => {
  ctx.replyWithPhoto({ source: imagePath('pinkblum.png') }, {
    caption: 'Welcome!',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Button 1', callback_data: 'btn1' },
          { text: 'Button 2', callback_data: 'btn2' }
        ]
      ]
    }
  });
});

bot.launch();
