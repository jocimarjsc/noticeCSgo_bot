import express from "express";
import cors from "cors";
import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app = express();

const bot = new Telegraf(process.env.TOKEN_TELEGRAM, {
    telegram: {
        webhookReply: false
    }
});

bot.on('text', ctx => {
    return ctx.reply(
        `Mensagem recebida de: ${ctx.message.from.first_name}`
    )
});

app.use(cors());

app.use(express.json());

app.use(bot.webhookCallback('/callback'));

app.use(routes);

export { app, bot }