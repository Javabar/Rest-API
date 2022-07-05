const User = require("./model");

exports.signUp = async (req, res) => {
try {
    // const newUser = await User.create({username: req.body.username, email: req.body.email, password: req.body.password});
    // req.body is an object that contains k/v pairs that match my user model
    const newUser = await User.create(req.body);
    res.send({user: newUser})
} catch (error) {
    console.log(error);
}
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
});
if (!user) {
    throw new error("incorrect")
} else {
    res.send({user})
 } 
} catch (error) {
    console.log(error);
 res.send({error});
}
}