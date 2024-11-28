const { Telegraf, Markup } = require("telegraf");
const path = require("path");

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf("6795133302:AAH-W3dcRilnc72R6goPied0mkPkpQJ8J9Q");

// Helper function to get the image path
const imagePath = (fileName) => path.join(__dirname, "images", fileName);

bot.start((ctx) => {
  // ctx.reply("Welcome to the bot! Let me show you around.");
  const message = `<b>Hey ${ctx.from.first_name} Welcome to Loozr!👋 </b> \n
You’re now part of the Loozr Music \n Game 🥳🎶, where music pays you! \n\n
Discover, crowd-invest & grow with \n your favourite artists 🎤💎\n
Tokenize creativity, earn rewards,\n and join the ultimate music-powered \n SocialFi experience! 🚀🔥\n\n
Start listening, earning, and \n celebrating music today! 🚀🎧
`;

  ctx.replyWithPhoto(
    { source: imagePath("loozrr.png") },
    {
      caption: message,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📀 Open Game",
              web_app: { url: "https://learning-mini-bot.vercel.app/" },
            },
          ],
          [
            {
              text: "👍 Join Loozr Community",
              url: "https://t.me/officialloozr",
            },
          ],
          [
            {
              text: "🎓 How to play",
              url: "https://docs.loozr.io/loozr-products/music-game-on-telegram#how-to-get-started ",
            },
          ],
        ],
      },
    }
  );
});

// bot.action("btn1", (ctx) => {
//   ctx.replyWithPhoto(
//     { source: imagePath("loozr.jpg") },
//     {
//       caption: "You pressed Button 1!",
//       reply_markup: {
//         inline_keyboard: [[{ text: "Back", callback_data: "back" }]],
//       },
//     }
//   );
// });

// bot.action("btn2", (ctx) => {
//   ctx.replyWithPhoto(
//     { source: imagePath("loozr.jpg") },
//     {
//       caption: "You pressed Button 2!",
//       reply_markup: {
//         inline_keyboard: [[{ text: "Back", callback_data: "back" }]],
//       },
//     }
//   );
// });

// bot.action("back", (ctx) => {
//   ctx.replyWithPhoto(
//     { source: imagePath("loozr.jpg") },
//     {
//       caption: "Welcome!",
//       reply_markup: {
//         inline_keyboard: [
//           [
//             { text: "Button 1", callback_data: "btn1" },
//             { text: "Button 2", callback_data: "btn2" },
//           ],
//         ],
//       },
//     }
//   );
// });

bot.launch();
