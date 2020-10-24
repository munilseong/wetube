import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./Routers/globalRouter";
import videoRouter from "./Routers/videoRouter";
import userRouter from "./Routers/userRouter";
import routes from "./routes";
import { middleware } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(middleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
