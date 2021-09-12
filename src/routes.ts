import { Router } from "express";

const routes = Router();

routes.get("/",(request, response) => {
    return response.status(200).json({ Status: "Bot is Running! 🤖"});
})

export { routes }