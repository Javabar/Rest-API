// Instantly run database connection
require("./db/connection");
// pull in all of express module
const express = require("express");
// cross ording resource sharing
const cors = require("cors");
// bring in all endpoints connected to userRouter
const userRouter = require("./users/route");
// create webserver constant to manipulate
const app = express();
// store either supplied port or 5001
const port = process.env.PORT || 5001;

// pares all request as if they are JSON sends all responses as JSON
app.use(express.json());
// allows requests to be made from other node applications of any origin
app.use(cors());
app.use(userRouter);

// listening on port 5001 or provided port on current location (localhost)
app.listen(port, () =>{
console.log(`listning on port ${port}`)
})



