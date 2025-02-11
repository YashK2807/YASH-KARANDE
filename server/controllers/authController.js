const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");

router.post('/signup', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        // if user with this email already exists
        if (user) {
            console.log("User already exists!");
            return res.status(400).json({
                message: "User already exists!",
                success: false
            });
        }

        // Hashing the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        const newUser = new User(req.body); // Fixed typo (req.bady -> req.body)
        await newUser.save();

        console.log("User created successfully!!!");

        res.status(201).json({
            message: "User created Successfully!",
            success: true
        });

    } catch (error) {
        console.log("Error while creating the user!!!!!", error);
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
});



router.get("/login", async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email});

        // check if user exists or not
        if(!user) {
            return res.send({
                message:"User does not exits!!!",
                success:true
            });
        }

        // check if password is valid or not 
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if(!isValid){
            return res.send({
                message:"Invalid Password!!!",
                success:false
            });
        }

        res.status(200).send({
            message:"User logged in successfully!!!",
            success:true
        });
    } catch (error) {
        console.log("Error while logging in!!!");
        res.status(401).send({
            message:"Error while logging in!!!",
            success:false
        });
    }
});

module.exports = router;
