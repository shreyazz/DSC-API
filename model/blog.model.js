const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date().toLocaleDateString(),
        required: false
    }
})

const blogModel = mongoose.model("Blogs", blogSchema);
module.exports = blogModel