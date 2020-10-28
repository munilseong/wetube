import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();

import "./models/Comment";
import "./models/Video";
import "./models/User";

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
