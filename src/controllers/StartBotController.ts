import { Telegraf } from "telegraf";
import StartBotMessageService from "../services/StartBotMessageService";

class StartBotController {
  start: string;
  bot: Telegraf;

  constructor() {
    this.start = "Bot On! 🟢";
    this.bot = new Telegraf(process.env.TOKEN_TELEGRAM);
  }

  public async inital() {
    await StartBotMessageService.start(this.bot);

    this.bot.launch();

    process.once("SIGINT", () => this.bot.stop("SIGINT"));
    process.once("SIGTERM", () => this.bot.stop("SIGTERM"));
  }
}

export { StartBotController };
