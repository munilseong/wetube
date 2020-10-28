import express from "express";
import {
  postjoin,
  getjoin,
  logout,
  getlogin,
  postlogin,
  githubLogin,
  postGithubLogIn,
  getMe,
} from "../Controllers/userController";
import { home, search } from "../Controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import passport from "passport";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getjoin);
globalRouter.post(routes.join, onlyPublic, postjoin, postlogin);

globalRouter.get(routes.login, onlyPublic, getlogin);
globalRouter.post(routes.login, onlyPublic, postlogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogIn
);

export default globalRouter;
