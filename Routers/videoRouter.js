import express from "express";
import {
  deleteVideo,
  geteditVideo,
  getupload,
  posteditVideo,
  postupload,
  videoDetail,
} from "../Controllers/videoController";
import routes from "../routes";
import { onlyPrivate, uploadFile } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getupload);
videoRouter.post(routes.upload, onlyPrivate, uploadFile, postupload);

videoRouter.get(routes.editVideo(), onlyPrivate, geteditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, posteditVideo);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
