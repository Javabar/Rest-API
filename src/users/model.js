const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const user = mongoose.model("User", userSchema)

module.exports = User;