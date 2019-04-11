const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

/**
 *
 * @param username
 * @return {boolean}
 */
const isAllowed = username => username === process.env.TELEGRAM_USERNAME;

/**
 *
 * @param ctx
 */
const checkIsAllowed = ({ message }) => {
  const { username } = message.from;
  if (!isAllowed(username)) {
    throw new Error('not allowed, m8');
  }
};

module.exports.bot = bot;
module.exports.checkIsAllowed = checkIsAllowed;
