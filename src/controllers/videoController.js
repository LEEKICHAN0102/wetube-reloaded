export const trending = (req, res) => res.send("Trend Videos!");
export const see = (req, res) => {
  return res.send("Watch Videos");
};
export const edit = (req, res) => {
  return res.send("Edit Videos");
};
export const search = (req, res) => res.send("Video Search");
export const upload = (req, res) => res.send("Video Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};