// Instantly run database connection
require("./db/connection");
// bring in all endpoints connected to userRouter
const userRouter = require("./users/route")
// pull in all of express module
const express = require("express");
// create webserver constant to manipulate
const app = express();
// store either supplied port or 5001
const port = process.env.PORT || 5001;

// pares all request as if they are JSON sends all responses as JSON
app.use(express.json());
// 
app.use(userRouter);

// listening on port 5001 or provided port on current location (localhost)
app.listen(port, () =>{
console.log(`listning on port ${port}`)
})



