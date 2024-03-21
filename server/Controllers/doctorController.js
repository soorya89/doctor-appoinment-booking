import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'


export const updateDoctor = async (req,res)=>{
    const id=req.params.id
    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body},{new:true})
        res.status(200).json({success:true , message:"Successfully Updted",data:updatedDoctor})
    }catch(err){
        res.status(500).json({success:false , message:"Failed to Update"}) 
    }
}

export const deleteDoctor = async (req,res)=>{
    const id=req.params.id
    try{
        const deletedDoctor = await Doctor.findByIdAndDelete(id, {$set:req.body},{new:true})
        res.status(200).json({success:true , message:"Successfully Deleted"})
    }catch(err){
        res.status(500).json({success:false , message:"Failed to deletete"}) 
    }
}

export const getSingleDoctor = async (req,res)=>{
    const id=req.params.id
    try{
        const doctor = await Doctor.findById(id).populate('reviews').select('-password')
        res.status(200).json({success:true , message:"Doctor found",data:doctor})
    }catch(err){
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getAllDoctor = async (req,res)=>{
   
    try{

        const {query} =req.query
        let doctor;

        if(query){
            doctor=await Doctor.find({isApproved:'approved',$or:[{name:{$regex:query,$option:'i'}},{specialization:{$regex:query,$option:'i'}}]}).select('-password')
        }else{
             doctor = await Doctor.find({isApproved:'approved'}).select('-password')
        }
        
        res.status(200).json({success:true , message:"doctor found",data:doctor})
    }catch(err){
        res.status(404).json({success:false , message:"Not found"}) 
    }
}

export const getDoctorProfile= async (req,res)=>{
    const doctorId =req.userId
    try{
        const doctor= await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success:false,message:"Doctor not found"})
        }
        const {password,...rest} = doctor._doc
        const appointments = await Booking.find({doctor:doctorId})
        return res.status(200).json({success:true,message:'Profile info is getting',data:{...rest,appointments}})
    }catch(err){
        res.status(500).json({success:false , message:"Something went wrong, cannot get"})
    }
}