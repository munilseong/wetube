import passport from "passport";
import User from "./models/User";
import GitHubStrategy from "passport-github";
import { githubLoginCallback } from "./Controllers/userController";
import routes from "./routes";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
