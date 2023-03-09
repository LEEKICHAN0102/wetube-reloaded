import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleWare = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed Continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("FinalWare");
};

app.get("/", logger, handleHome);

// Use Valuable or Inline Function
// app.get("/",handleHome(req,res){
// res.send("Hello World")})
// It is your choice!

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}👀`);

app.listen(PORT, handleListening);
