const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with your actual Telegram Bot API token
const bot = new Telegraf('7904950290:AAEKvu8EN8s4PhHVmLtqOmGJ_RPBjUPMnM0');

// Start command
bot.start((ctx) => {
  ctx.reply(`Welcome, ${ctx.from.first_name}!\nI am your bot, here to assist you. I was created by Gospel. Type /help to see what I can do.`);
});

// Help command
bot.help((ctx) => {
  ctx.reply(`Here are my commands:\n/start - Welcome message\n/help - List of commands\n/about - Learn more about me\n/echo [message] - I will repeat your message\n/bye - Say goodbye`);
});

// About command
bot.command('about', (ctx) => {
  ctx.reply('I am a simple Telegram bot created by Gospel,one of the best Telegram bot developers in the world.');
});

// Echo command
bot.command('echo', (ctx) => {
  const message = ctx.message.text.split(' ').slice(1).join(' ');
  if (message) {
    ctx.reply(message);
  } else {
    ctx.reply('Please provide a message to echo. Example: /echo Hello!');
  }
});

// Bye command
bot.command('bye', (ctx) => {
  ctx.reply('Goodbye! Have a great day!');
});

// Handle unrecognized commands
bot.on('text', (ctx) => {
  ctx.reply("I'm sorry, I didn't understand that. Type /help to see what I can do.");
});

// Launch the bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

