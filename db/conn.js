const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.URI;
const connectToDB = () => {
    mongoose.connect(uri, (err) => {
        if(err) console.log('DB not connected 🔴')
        else console.log('DB connected 🟢')
    })
}

module.exports = connectToDB