import { Telegraf } from "telegraf";
import CreateStartService from "./CreateStartService";


class StartBotMessageService {
    async start(bot: Telegraf) {        
        await CreateStartService.execute(bot);
    }
}

export default new StartBotMessageService;