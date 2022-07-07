const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("../users/model");


exports.hashPass = async (req, res, next) => {
    try {
        // // grabbed password variable from body and stored it locally 
        // const tempPass = req.body.password;
        // // hashed the password and started it in a new content 
        // const hashedPass = await bcrypt.hash(tempPass, 8);
        // //  stores freshly hashed password back in the req body
        // req.body.password = hashedPass;
        // all steps above condense into 1 line
        req.body.password = await bcrypt.hash(req.body.password, 8);
        // moves onto next middleware/controller in endpoint
        next();
    } catch (error) {
        console.log(error);
        res.send({error});
    }
};

exports.comparePass = async (req, res, next) => {
    try {
        req.user = await User.findOne({username: req.body.username});
        // const match = await bcrypt.compare(req.body.password, user.password);
    if (await bcrypt.compare(req.body.password, req.user.password)) {
        // req.user = user;
        next();
    } else {
        throw new Error("Incorrect Credentials");
    }
    } catch (error) {
        console.log(error);
        res.send({error});
    }
}

exports.tokenCheck = async (req, res, next) => {
    try {
         // decode token using same secret that created the token
        const decodedToken = jwt.verify(req.header("Authorization"), process.env.SECRET);
        // finding the user by their id, stored in the token    
        req.user = await User.findById(decodedToken.id);
        next();
    } catch (error) {
        console.log(error);
        res.send({error});
    }
};

// exports.tokenCheck = async (req, res, next) => {
//     try {
//         // grab token from authorization header in the request 
//         const token = req.header("Authorization")
//         // decode using same scret that created the token
//         const decodedToken = jwt.verify(token, process.env.SECRET);
//         const user = await User.findOne({_id: decodedToken.id});
//         req.user = user
//         next();
//     } catch (error) {
//         console.log(error);
//         res.send({error});
//     }
// };