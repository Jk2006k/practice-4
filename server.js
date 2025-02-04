const express=require('express')
const app=express()

const router=require('./routes/userRoutes')

const authMiddleware=require('./middleware/authMiddleware')

const PORT=3000;

const connectDB=require('./config/db')

app.listen(PORT,async()=>{
    try{
        await connectDB();
        console.log(`server running in Port ${PORT}`)
    }catch(error){
        console.log(error)
    }
})

