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