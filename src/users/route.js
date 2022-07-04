// import router method only from from express
const { Router} = require("express");
// import only signup from controllers file
const { signup} = require("./controller");
// create a router that can have end points added to it 
const userRouter = Router();
// defining a post request on /user path that calls the signup controller
userRouter.post("/user", signup)

module.exports = userRouter;