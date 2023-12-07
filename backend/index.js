import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from './Routes/Auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import adminRoute from './Routes/admin.js'
import reviewRoute from './Routes/review.js'

dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/',(req,res)=>{
    res.send("Api is working")
})

mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology:true,   
    })
    console.log("MongoDB database is connected");
    }catch(err){
        console.log('MongoDB database is connection failed');
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/doctor',doctorRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/admin',adminRoute)

app.listen(port,()=>{
    connectDB()
    console.log("Server is running"+ port);
})