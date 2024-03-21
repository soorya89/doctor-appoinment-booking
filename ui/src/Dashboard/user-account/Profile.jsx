
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import {BASE_URL,token} from '../../config'
import {toast} from 'react-toastify'

const Profile = ({user}) => {
  const [selectedFile,setSelectedFile] =useState(null)

  const [loading,setLoading] = useState(false)
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:null,
    bloodType:'',
    gender:'',
    address:''
  })
  const navigate=useNavigate()

  useEffect(()=>{
    setFormData({name:user.name, 
      email:user.email, 
      photo:user.photo, 
      gender:user.gender, 
      address:user.address,
      street:user.street,
      city:user.city,
      state:user.state,
      zip:user.zip,
      country:user.country,
       bloodType:user.bloodType})
  },[user])
  const handleInputChange= async e =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleFileChange= async e =>{
    const file=e.target.files[0]
    const data=await uploadImageToCloudinary(file)
 
    setSelectedFile(data.url)
    setFormData({...formData,photo:data.url})
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/user/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message);
      }
  
      setLoading(false);
      toast.success(data.message);
      navigate('/user/profile/me');
    } catch (err) {
      toast.error(err.message || 'Something went wrong.');
      setLoading(false);
    }
  };
  
  return (
    <div className='mt-10'>
      <form  onSubmit={submitHandler}>
          <div className='mb-5'>
        <input type='text'
         placeholder='Full Name' 
         name='name' 
         value={formData.name} 
          onChange={handleInputChange}
         className='w-full pr-4 py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='email'
         placeholder='Enter Your Email' 
         name='email' 
         value={formData.email} 
          onChange={handleInputChange}
          autoComplete='off'
         className='w-full pr-4 py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' aria-readonly readOnly />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='Address' 
         name='address' 
         value={formData.address} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='Street' 
         name='street' 
         value={formData.street} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='City' 
         name='city' 
         value={formData.city} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='State' 
         name='state' 
         value={formData.state} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='Country' 
         name='country' 
         value={formData.country} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='number'
         placeholder='Zip' 
         name='zip' 
         value={formData.zip} 
          onChange={handleInputChange} 
         
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='text'
         placeholder='Blood Type' 
         name='bloodType' 
         value={formData.bloodType} 
          onChange={handleInputChange} 
          autoComplete='off'
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>
      <div className='mb-5 flex items-center justify-between'>

        <label className='text-textColor font-semibold text=[15px] leading-7'>
          Gender:
          <select name='gender' 
          value={formData.gender} 
          onChange={handleInputChange}
          className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className='mb-5 flex items-center gap-3'>
        {formData.photo && (<figure 
        className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
          <img alt='' src={formData.photo} className='w-full rounded-full'/>
        </figure>)}
        <div className='relative w-[130px] h-[50px]'>
          <input type='file'
          name='photo'
          id='customFile'
          onChange={handleFileChange}
          accept='.jpg, .png'
          className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
          <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full 
          flex items-center px-[0.75rem]  py-[0.375rem] text-[15px] leading-6 overflow-hidden
           bg-[#0066ff46] text-textColor font-semibold rounded-lg truncate cursor-pointer'>{ selectedFile? selectedFile.name : 'Upload Photo'}</label>
        </div>
      </div>
      <div className='mt-7'>
        <button 
        disabled={loading && true} 
        type='submit' 
        className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg'>
          {loading ? <HashLoader size={25} color='fffff' /> :'Update'}
          </button>
      </div>

    
          </form> 
    </div>
  )
}

export default Profile
