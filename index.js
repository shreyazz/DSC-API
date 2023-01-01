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

// routes
app.use('/api', require('./routes/register'));
app.use('/api', require('./routes/login'));

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
