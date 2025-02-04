const User = require('../models/userModels')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const signUp = async (req, res) =>{
    try {
        console.log(req.body)
        if (!req.body) {
            return res.status(400).json({success: false, msg: "Request body is missing"})
        }
        const {username, email, password,address,phonenumber} = req.body
        if (username.trim() == ""){
            return res.status(400).json({success: false, msg: "Username Cannot be Empty"})
        }
        if (email.trim() == ""){
            return res.status(400).json({success: false, msg: "Email Cannot be Empty"})
        }
        if (password.length < 8 || password.length > 16){
            return res.status(400).json({success: false, msg: "Password length should be greater than 8 or less than or equal to 16"})
        }
        if (address.trim() == ""){
            return res.status(400).json({success: false, msg: "Email Cannot be Empty"})
        }
        if (phonenumber.trim() == ""){
            return res.status(400).json({success: false, msg: "Email Cannot be Empty"})
        }

        newuser=new User({
            username,
            email,
            password,
            address,
            phonenumber
        })
        User.password=await bcrypt.hash(password,10)
        await newuser.save()
        res.json({msg:'user saved'})

        await newUser.save()
        
        return res.status(201).json({success: true, msg: "User Created Successfully"})
    } catch (error) {
        return res.status(500).json({success: false, msg: "Internal Server Error", desc: error.message})
    }
}

module.exports=signUp;
