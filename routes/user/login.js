const express = require("express");
const router = express.Router();
const userModel = require('../../model/user.model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/login', async (req, res) => {
    const {email, pin} = req.body;
    try {
        const secretKey = process.env.JWT_CODE;
        const user = await userModel.findOne({email});
        if(user){
            const pinCheck = await  bcrypt.compare(pin, user.pin);
            if(pinCheck){
                let token = jwt.sign(
                    { email: user.email, id: user._id, name: user.name, number: user.number  },
                    secretKey
                  );
                  return res
                    .status(200)
                    .json({ message: "User logged in! 🟢", token: token });
            }else{
                return res.status(404).json({ message: "Auth Failed" });
            }

        }
        else{
      return res.status(409).json({ message: "user not found ! 🔴" });

        }

    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred in register route! 🔴", error: error});
    }
    
})

module.exports = router