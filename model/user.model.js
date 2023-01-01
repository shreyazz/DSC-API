const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: false
    }
})

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel