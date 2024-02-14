import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const corsOption={
    origin:true
}

app.get('/',(req,res)=>{
    res.send('Api is working')
})

mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB database is connected");
    }catch(err){
        
        console.log("MongoDB database is failed to connect");
    }
}


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))

app.listen(port,()=>{
    connectDB()
    console.log("Server is running on port" +port);
})