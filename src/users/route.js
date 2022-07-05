// import router method only from from express
const { Router} = require("express");
// import only signup from controllers file
const { signUp} = require("./controller");

const {hashPass} = require("../middleware");
// create a router that can have end points added to it 
const userRouter = Router();
// defining a post request on /user path that calls the signup controller
userRouter.post("/user", signUp)
// defining a post request on /login path, that calls the login controller
userRouter.post("/login", login)

module.exports = userRouter;