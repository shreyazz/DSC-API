const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/conn");

// middlewares
app.use(cors());
app.use(express.json());

// connection to DB
connectToDB();

// user routes
app.use('/api/auth', require('./routes/user/register'));
app.use('/api/auth', require('./routes/user/login'));

// blog routes
app.use('/api/blog', require('./routes/blog/addBlog'));
app.use('/api/blog', require('./routes/blog/getBlogs'));
app.use('/api/blog', require('./routes/blog/getBlogById'));
app.use('/api/blog', require('./routes/blog/deleteBlog'));

// defining port
const PORT = process.env.PORT || 3001;

// setting up an empty GET Route
app.get("/", (req, res) => {
  res.json({
    message: "You've come to the right place... it's a GET request!!",
  });
});

// Starting Server on PORT
app.listen(PORT, () => console.log("Server started on PORT Number: " + PORT));

// export main module
module.exports = app