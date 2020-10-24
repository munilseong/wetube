import routes from "../routes";
import "../db";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const video = await Video.find({});
    res.render("home", { pageTitle: "home", video });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", video: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $option: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "searching", searchingBy, videos });
};

export const getupload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const postupload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    title,
    description,
    fileUrl: path,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById({ _id: id });
    res.render("videoDetail", { pageTitle: "videoDetail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const geteditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById({ _id: id });
    res.render("editVideo", { pageTitle: `edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const posteditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
