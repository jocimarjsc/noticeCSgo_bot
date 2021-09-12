import { Middleware, MiddlewareFn, Telegraf } from "telegraf";
import CreateButtons from "./CreateButtons";
import getRacking from "./getRacking";


class CreateBotStartService {
  async execute(bot: Telegraf) {
    const reply_markup = await CreateButtons.execute();
    
    bot.start(ctx => {
      const message = `Olá <b>${ctx.from.first_name},</b>
seja bem vindo ao Bot 🤖
<b>Counter Strike Global Offencive</b>
<a href="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg">...</a>
Suporte: <b>@jocimajsc</b>`;

      ctx.replyWithHTML(message, { reply_markup });
    });

    bot.hears("🏆 Ranking", async ctx => {
      const racking =  await getRacking.execute();
      ctx.replyWithHTML(racking)
    })

    bot.hears("📣 News", ctx => {
      ctx.replyWithHTML('📣 News')
    })

    bot.hears("🎥 Live", ctx => {
      ctx.replyWithHTML('🎥 Live')
    })

    bot.hears("🤼‍♂️ Matches", ctx => {
      ctx.replyWithHTML('🤼‍♂️ Matches')
    })

    bot.hears("👨‍👩‍👧‍👦 Teams", ctx => {
      ctx.replyWithHTML('👨‍👩‍👧‍👦 Teams')
    })
  }
}

export default new CreateBotStartService