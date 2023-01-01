const express = require("express");
const router = express.Router();
const userModel = require('../../model/user.model')
const bcrypt = require("bcryptjs");
router.post("/register", async (req, res) => {
    try {
      const { name, email, pin, number } = req.body;
      if (!name || !email || !pin ||!number) {
        return res.status(422).json({ message: "Please fill all the data! 🔴" });
      }
      const findUser = await userModel.findOne({ email });
      if (findUser) {
      return res.status(409).json({ message: "user is already present! 🔴" });
      }
      const hashedPin = await bcrypt.hash(pin, 12);
      const newUser = await userModel.create({
        name, email, pin: hashedPin, number 
      });
  
      if (!newUser) {
       return res.json({
          message: "Some error occurred during registration of the user! 🔴",
        });
      }
      return res.status(201).json({ message: "User registered! 🟢", userDetails: {name, email, pin:hashedPin, number } });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in register route! 🔴", error: error});
    }
  });
  
  module.exports = router