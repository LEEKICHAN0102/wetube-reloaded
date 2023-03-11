export const trending = (req, res) => res.render("home", { pagetitle: "Home" });
export const see = (req, res) => res.render("watch", { pagetitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pagetitle: "Edit" });
export const search = (req, res) => res.send("Video Search");
export const upload = (req, res) => res.send("Video Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};
