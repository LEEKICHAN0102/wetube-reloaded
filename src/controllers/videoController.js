export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => {
  return res.send("Edit Videos");
};
export const search = (req, res) => res.send("Video Search");
export const upload = (req, res) => res.send("Video Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};
