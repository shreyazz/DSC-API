const express = require("express");
const router = express.Router();
const blogModel = require("../../model/blog.model");
router.post("/getById", async (req, res) => {
  const { id } = req.body;
  try {
    const blog = await blogModel.findById(id);
    if (blog) {
      return res.json({ blog });
    } else {
      return res.status(404).json({ message: "The blog does not exist! 🔴" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Some error occurred in get blog by id route! 🔴",
      error: error,
    });
  }
});

module.exports = router;
