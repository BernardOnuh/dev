const { Telegraf, Markup } = require("telegraf");
const path = require("path");

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf("6795133302:AAH-W3dcRilnc72R6goPied0mkPkpQJ8J9Q");

// Helper function to get the image path
const imagePath = (fileName) => path.join(__dirname, "images", fileName);

bot.start((ctx) => {
  ctx.replyWithPhoto(
    { source: imagePath("loozr.jpg") },
    {
      caption: "Welcome!",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Open Loozr",
              web_app: { url: "https://learning-mini-bot.vercel.app/" },
            },
            { text: "Join community", callback_data: "loozr.jpg" },
          ],
        ],
      },
    }
  );
});

bot.action("btn1", (ctx) => {
  ctx.replyWithPhoto(
    { source: imagePath("loozr.jpg") },
    {
      caption: "You pressed Button 1!",
      reply_markup: {
        inline_keyboard: [[{ text: "Back", callback_data: "back" }]],
      },
    }
  );
});

bot.action("btn2", (ctx) => {
  ctx.replyWithPhoto(
    { source: imagePath("loozr.jpg") },
    {
      caption: "You pressed Button 2!",
      reply_markup: {
        inline_keyboard: [[{ text: "Back", callback_data: "back" }]],
      },
    }
  );
});

bot.action("back", (ctx) => {
  ctx.replyWithPhoto(
    { source: imagePath("loozr.jpg") },
    {
      caption: "Welcome!",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Button 1", callback_data: "btn1" },
            { text: "Button 2", callback_data: "btn2" },
          ],
        ],
      },
    }
  );
});

bot.launch();
