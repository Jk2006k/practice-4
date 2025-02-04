const mongoose =require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/express')
        console.log("Server Connected Successfully")
    }catch(error){
        console.log(error)
    }
}

module.exports=connectDB;


