import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { routes } from "./routes";
import { StartBotController } from "./controllers/StartBotController";

dotenv.config();

const bot = new StartBotController();
bot.inital();

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

export { app }