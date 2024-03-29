import express, { application } from "express"; //express = require('express')이 기존 문법이었으나, babel 사용으로 축약.
import morgan from "morgan"; // for using Middleware
import session from "express-session";
import { localsMiddleWare } from "./middlewares";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
//what is middle ware? -> middle (soft)ware request<->middleware<->response
const app = express(); // using express!
const logger = morgan("dev"); //check log ex)404,303...

app.set("view engine", "pug"); //Our view engine is pug//
app.set("views", process.cwd() + "/src/views"); //for express find to views//
app.use(logger); // all app.use is global middleware
app.use(express.urlencoded({ extended: true })); // Need form understand req.body

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleWare);
app.use(flash());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter); // Router는 url이 어떻게 시작하는지에 대해 나누는 방법, 너무 어렵게 생각 말자..
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app; // app 하나만 export 한다.
