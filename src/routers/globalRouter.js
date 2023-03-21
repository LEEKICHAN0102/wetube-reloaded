import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home); //videoController.js
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;

//git for every one
