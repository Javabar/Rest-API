// import router method only from from express
const { Router} = require("express");
// import only signup from controllers file
const { signUp, login, listUser} = require("./controller");

const {hashPass, comparePass, tokenCheck} = require("../middleware");
// create a router that can have end points added to it 
const userRouter = Router();
// defining a post request on /user path that calls the signup controller
userRouter.post("/user", hashPass, signUp);
// defining a post request on /login path, that calls the login controller
userRouter.post("/login", comparePass, login);
// defining a post request on a /token path that calls both token and login
userRouter.get("/token", tokenCheck, login);
userRouter.get("/user/:username", listUser);

module.exports = userRouter;