import { Middleware, MiddlewareFn, Telegraf } from "telegraf";
import CreateButtons from "./CreateButtons";
import getMatches from "./getMatches";
import getNews from "./getNews";
import getRacking from "./getRacking";


class CreateBotStartService {
  async execute(bot: Telegraf) {
    const reply_markup = await CreateButtons.execute();
    
    bot.start(ctx => {
      const message = `
Olรก <b>${ctx.from.first_name},</b>
seja bem vindo ao Bot ๐ค
<b>Counter Strike Global Offencive</b>
<a href="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg">...</a>
Suporte: <b>@jocimarjsc</b>
`;

      ctx.replyWithHTML(message, { reply_markup });
    });

    bot.hears("๐ Ranking", async ctx => {
      const racking =  await getRacking.execute();
      ctx.replyWithHTML(racking, {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Text",
                callback_data: "Text"
              }
            ]
          ]
        }
      })
    })

    bot.hears("๐ฃ News", async ctx => {
      const news = await getNews.execute();
      ctx.replyWithHTML('๐ฃ News \n'+ process.env.BASE_URL+news[0].link)
      ctx.replyWithHTML('๐ฃ News \n'+ process.env.BASE_URL+news[1].link)
      ctx.replyWithHTML('๐ฃ News \n'+ process.env.BASE_URL+news[2].link)
      ctx.replyWithHTML('๐ฃ News \n'+ process.env.BASE_URL+news[3].link)
      ctx.replyWithHTML('๐ฃ News \n'+ process.env.BASE_URL+news[4].link)
    })

    bot.hears("๐ฅ Live", ctx => {
      ctx.replyWithHTML('๐ฅ Live')
    })

    bot.hears("๐คผโโ๏ธ Matches", async ctx => {
      const data = await getMatches.execute()
      ctx.replyWithHTML('๐คผโโ๏ธ Matches \n'+data)
    })

    bot.hears("๐จโ๐ฉโ๐งโ๐ฆ Teams", ctx => {
      ctx.replyWithHTML('๐จโ๐ฉโ๐งโ๐ฆ Teams')
    })
  }
}

export default new CreateBotStartService
