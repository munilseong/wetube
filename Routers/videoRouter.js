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
import { uploadFile } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, uploadFile, postupload);

videoRouter.get(routes.editVideo(), geteditVideo);
videoRouter.post(routes.editVideo(), posteditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
