const express = require("express");
const router = express.Router();
const blogModel = require("../../model/blog.model");

router.post("/add", async (req, res) => {
  const { title, body, image, category } = req.body;
  try {
    if (!title || !body || !category) {
      return res.status(422).json({ message: "Please fill all the data! 🔴" });
    }
    const blog = blogModel.findOne({ title });
      const newBlog = await blogModel.create({
        title,
        body,
        image,
        category,
      });
      if (!newBlog) {
        return res.json({
          message: "Some error occurred during adding a new blog! 🔴",
        });
      }
      return res
        .status(201)
        .json({ message: "Blog Added! 🟢", blogDetails: { newBlog } });
    
  } catch (error) {
    return res
      .status(401)
      .json({
        message: "Some error occurred in add blog route! 🔴",
        error: error,
      });
  }
});

module.exports = router;
