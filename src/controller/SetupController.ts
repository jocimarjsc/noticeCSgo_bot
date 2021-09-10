import { Request, Response } from "express";
import { bot } from "../app";

class SetupControler {
    async handle( request: Request, response: Response) {
        const url = `${process.env.CURRENT_HOST}/callback`;
        await bot.telegram.setWebhook(url);
        response.send(`Bot listening on ${process.env.CURRENT_HOST}🔥`);
    }
}

export { SetupControler }