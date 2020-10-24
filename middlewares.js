import routes from "./routes";
import multer from "multer";

const uploadMulter = multer({ dest: "uploads/videos/" });

export const middleware = (req, res, next) => {
  res.locals.sitemap = "Wetube";
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthorized: false,
  };
  next();
};

export const uploadFile = uploadMulter.single("videoFile");
