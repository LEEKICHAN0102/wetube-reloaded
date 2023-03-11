const fakeUser = {
  username: "kichan",
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Video Search");
export const upload = (req, res) => res.send("Video Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};
