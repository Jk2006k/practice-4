const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    username: {
        type: String,
    },
    discription: {
        type: String, 
    },
    price: {
        type: Number,
    },
},{timestamps:true})

module.exports=mongoose.model("Product",productSchema)


