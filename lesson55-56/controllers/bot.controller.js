import Job from "../models/job.model.js";

export const botController = async (ctx, bot) => {
  try {
    await ctx.reply(
      "Men yordamchi botman! 🙋‍♂️ men sizning ma'lumotlarningizni yozib olaman"
    );

    const data = {
      step: 0,
    };

    // ctx.reply(ctx.from);
    const sendQuestion = async (xabar) => {
      await ctx.reply(xabar);
      bot.on("message", (msg) => {
        data.experience = msg.message.text;
        data.step += 1;
      });
    };

    if (data.step === 6) {
      const newData = new Job({});
      await newData.save();
    } else {
      switch (data.step) {
        case 1:
          sendQuestion("Ish tajribandiz necha yil?");
          break;
        case 2:
          sendQuestion("Ish tajribandiz necha yil?");
          break;
        case 3:
          sendQuestion("Ish tajribandiz necha yil?");
          break;
        case 4:
          sendQuestion("Ish tajribandiz necha yil?");
          break;
        case 5:
          sendQuestion("Ish tajribandiz necha yil?");
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
