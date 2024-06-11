import { Bot, InputFile } from "grammy";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const bot = new Bot(process.env.BOT_API);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("me", async (ctx) => {
  try {
    ctx.reply(`Sizning profilingiz: ${ctx.me.first_name}`);
    await bot.api.sendMessage(
      process.env.USER_CHAT_ID,
      `<b>Hi!</b> 
       <i>Welcome</i> to 
       <a href="https://grammy.dev">🪓 grammY 🪓</a>.
      `,
      { parse_mode: "HTML" }
    );
    await bot.api.sendPhoto(
      process.env.USER_CHAT_ID,
      new InputFile(
        path.resolve(
          process.cwd(),
          "public",
          "uploads",
          "image-1718001759632.jpg"
        )
      ),
      {
        caption: "photo.jpg",
      }
    );
  } catch (error) {
    console.log(error);
  }
});

bot.on("message", (ctx) => {
  console.log(ctx.me.id, ctx.me.username, ctx.me.first_name);
  ctx.reply(`${ctx.me.first_name} yozgan habari: ${ctx.message.text}`);
});

export default bot;
