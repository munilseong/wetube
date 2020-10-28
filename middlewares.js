import routes from "./routes";
import multer from "multer";

const uploadMulter = multer({ dest: "uploads/videos/" });

export const middleware = (req, res, next) => {
  res.locals.sitemap = "Wetube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadFile = uploadMulter.single("videoFile");
