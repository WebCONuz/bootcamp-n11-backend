import { Bot, InputFile, Keyboard, InlineKeyboard, session } from "grammy";
import { botController } from "../controllers/bot.controller.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const bot = new Bot(process.env.BOT_API);

bot.command("start", async (ctx) => {
  const startKeyboard = new Keyboard()
    .text("🙋‍♂️ Yordam")
    .row()
    .text("📲 Ijtimoiy tarmoqlar")
    .row();

  await ctx.reply("Men yordamchi botman!");
  await ctx.reply(
    "🙋‍♂️ Yordam - bu yerda siz menga savol bilan xabar yuborishingiz mumkin"
  );
  await ctx.reply(
    "🟢 Takliflar xabarlar, fotosuratlar, videolar, audio/video xabarlar, fayllarni yuborishni qo'llab-quvvatlaydi"
  );
  await ctx.reply(
    "📲 Ijtimoiy tarmoqlar - Men barcha ijtimoiy tarmoqlarda mavjudman"
  );
  await ctx.reply("Qay biridan boshlaymiz? Tanlang 👇", {
    reply_markup: startKeyboard,
  });
});

bot.hears("🙋‍♂️ Yordam", async (ctx) => {
  console.log(ctx);
  let message = "Button bosildi";
  await ctx.reply(message);
});

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

bot.command("job", (ctx) => botController(ctx, bot));

export default bot;
