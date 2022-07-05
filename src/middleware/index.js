const bcrypt = require("bcryptjs")

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
        res.send({error})
    }
}