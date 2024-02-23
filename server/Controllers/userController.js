import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async (req,res)=>{
    const id=req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body},{new:true})
        res.status(200).json({success:true , message:"Successfully Updted",data:updatedUser})
    }catch(err){
        res.status(500).json({success:false , message:"Failed to Updte"}) 
    }
}

export const deleteUser = async (req,res)=>{
    const id=req.params.id
    try{
        const deletedUser = await User.findByIdAndDelete(id, {$set:req.body},{new:true})
        res.status(200).json({success:true , message:"Successfully Deleted"})
    }catch(err){
        res.status(500).json({success:false , message:"Failed to deletete"}) 
    }
}

export const getSingleUser = async (req,res)=>{
    const id=req.params.id
    try{
        const user = await User.findById(id).select("-password")
        res.status(200).json({success:true , message:"User found",data:user})
    }catch(err){
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getAllUser = async (req,res)=>{
   
    try{
        const users = await User.find({}).select("-password")
        res.status(200).json({success:true , message:"Users found",data:users})
    }catch(err){
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getUserProfile= async(req,res)=>{
    const userId=req.userId
    try{
        const user= await User.findById(userId)
        if(!user){
            res.status(404).json({success:false,message:"User not found"})
        }
        const {password,...rest}=user._doc
        res.status(200).json({status:true,message:"Profile info is getting..", data:{...rest}})

    }catch(err){
        res.status(500).json({success:false,message:"Something went wrong..."})
    }
}

export const getMyAppoinments= async(req,res) =>{
    try{
        //retrieve appoinment from booking for specific user
        const booking = await Booking.find({user:req.userId})

        //extract doctor ids from appoinment booking
        const doctorIds = booking.map(el=>el.doctor.id)

        //retreive doctors using doctor ids
        const doctors=await Doctor.find({_id:{$in:doctorIds}}).select('-password')
        req.status(200).json({success:true,message:'Appoinment are getting',data:doctors})
    }catch(err){
        res.status(500).json({success:false,message:'Something went wrong, cannot get'})
    }
}