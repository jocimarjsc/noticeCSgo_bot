import { Router } from "express";
import { SetupControler } from "./controller/SetupController";

const routes = Router();

const setupController = new SetupControler();

routes.get("/setup", setupController.handle);

export { routes };