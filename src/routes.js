import { Router } from "express";
import cepController from "./app/controllers/cepController";

import CepController from "./app/controllers/cepController";

import logRequestsMiddleware from "./app/middlewares/logRequests";

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get("/cep/:cep", CepController.show);

routes.get("/cep/", cepController.query);

export default routes;
