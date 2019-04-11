const { shot } = require('./cam');
const { shootScreen } = require('./screenshot');
const { bot, checkIsAllowed } = require('./bot');

bot.command('pic', async (ctx) => {
  try {
    checkIsAllowed(ctx);
    const source = await shot();
    return ctx.replyWithPhoto({ source });
  } catch (e) {
    console.log(e);
    return ctx.reply(e.message);
  }
});

bot.command('screen', async (ctx) => {
  try {
    checkIsAllowed(ctx);
    const sources = await shootScreen();
    return Promise.all(
      sources.map(source => ctx.replyWithPhoto({ source }))
    );
  } catch (e) {
    console.log(e);
    return ctx.reply(e.message);
  }
});

bot.launch();
