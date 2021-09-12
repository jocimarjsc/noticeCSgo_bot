import { Telegraf } from "telegraf";
import { HLTV } from "hltv";

const bot = new Telegraf(process.env.TOKEN_TELEGRAM);

HLTV.getEvents().then( resp => console.log(resp))

bot.hears("menu", (ctx) => {
  console.log("Obtendo Menu");
  ctx.reply("Segue o menu:", {
    reply_to_message_id: ctx.message.message_id,
    reply_markup,
  });
});

const reply_markup = {
  one_time_keyboard: true,
  keyboard: [
    [
      {
        text: "Menu",
        request_contact: true,
        one_time_keyboard: true,
      },
    ],
    ["Cancelar"],
  ],
};

bot.command("start", (ctx) => {
  const welcome = "Olá, segue  o menu de opções! 📖";
  ctx.reply(welcome, {
    reply_to_message_id: ctx.message.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Ranking",
            callback_data: "ranking",
          },
          {
            text: "News",
            callback_data: "news",
          },
          {
            text: "Live",
            callback_data: "live",
          }
        ],
      ],
    },
  });
});

bot.action("ranking", async (ctx) => {
  console.log("Obtendo informações");
  const data = await HLTV.getTeamRanking();
  const team = data.sort(orderDescByDate)
  
  ctx.replyWithHTML(`
    <b>Rancking 2021</b>\n ${team.map(rancking => {
      const teams = `${rancking.place} - ${rancking.team.name}\n`
      return teams
    }).join(" ")}
  `)
});

function orderDescByDate(a: any, b: any) {
  return a.place - b.place;
}

bot.action("news", async (ctx) => {
  ctx.reply("Buscando dados...");

  const data = await HLTV.getNews();

  const news = data;

  news.forEach((notice, index) => {
    if (index + 1 <= 5) {
      ctx.replyWithHTML(`
        <a href="${process.env.BASE_URL}${notice.link}"><b>${notice.title}</b></a>
        `);
    }
  });
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
