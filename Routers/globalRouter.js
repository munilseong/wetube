import express from "express";
import {
  postjoin,
  getjoin,
  logout,
  getlogin,
  postlogin,
} from "../Controllers/userController";
import { home, search } from "../Controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postlogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
