const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String, 
    },
    password: {
        type: String,
    },
    address:{
        type:String
    },
    phonenumber:{
        type:Number
    },
    avatar:{
        type:String
    }
    
})

module.exports=mongoose.model("User",UserSchema)
