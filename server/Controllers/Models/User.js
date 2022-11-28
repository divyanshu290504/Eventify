const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    contact: Number,
    password: String,
    Events: [String]
})

const User = mongoose.model("User", UserSchema);

module.exports = User;