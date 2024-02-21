import Doctor from '../models/DoctorSchema.js'


export const updateDoctor = async (req,res)=>{
    const id=req.params.id
    try{
        const updatedDoctor = await Doctor.findByIdAnsUpdate(id, {$set:req.body},{new:true})
        res.status(200).json({success:true , message:"Successfully Updted",data:updatedDoctor})
    }catch(err){
        res.status(500).json({success:false , message:"Failed to Update"}) 
    }
}

export const deleteDoctor = async (req,res)=>{
    const id=req.params.id
    try{
        const deletedDoctor = await Doctor.findByIdAnsDelete(id, {$set:req.body},{new:true})
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