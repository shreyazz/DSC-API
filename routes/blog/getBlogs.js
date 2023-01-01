const express = require('express');
const router = express.Router();
const blogModel = require('../../model/blog.model.js')
router.get('/getAll', async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.json({blogs})
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred in get all blogs route! 🔴", error: error});
    }
})

module.exports = router;