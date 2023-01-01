const express = require("express");
const router = express.Router();
const blogModel = require("../../model/blog.model");
router.post("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    const blog = await blogModel.findByIdAndDelete(id);
    if (blog) {
      return res.json({message: "Blog Deleted! 🟢"});
    } else {
      return res.status(404).json({ message: "The blog does not exist! 🔴" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Some error occurred in delete blog by id route! 🔴",
      error: error,
    });
  }
});

module.exports = router;
