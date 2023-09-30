import {useState} from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  const [selectedFile,setSelectesFile] =useState(null)
  const [previewURL,setPreviewURL] =useState(null)
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    role:'patient',
    gender:''
  })
  const handleInputChange= async(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleFileChange=(e)=>{
    const file=e.target.files(0)

    console.log(file);
  }
  const submitHandler =async (e)=>
  e.preventDefault()
  return (
    <section className="px-5 lg:px-0">
      <div className='w-full max-w-[570px] mx-auto round-lg shadow-md md:p-10'>
        <h3 className='text-textColor text-[20px] leading-9 font-bold mb-10'>
          Create an <span className='text-primaryColor'>account</span>
          </h3>
        
          <form  onSubmit={submitHandler} className='py-4 md:py-0'>
          <div className='mb-5'>
        <input type='text'
         placeholder='Full Name' 
         name='name' 
         value={formData.name} 
          onChange={handleInputChange}
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='email'
         placeholder='Enter Your Email' 
         name='email' 
         value={formData.email} 
          onChange={handleInputChange}
          
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mb-5'>
        <input type='password'
         placeholder='Password' 
         name='password' 
         value={formData.password} 
          onChange={handleInputChange} 
          
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <label className='text-textColor font-semibold text=[15px] leading-7'>
          Are you a:
          <select name='role'
          value={formData.role} 
          onChange={handleInputChange}
           className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </label>

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
        <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
          <img alt='' src='' className='w-full rounded-full'/>
        </figure>
        <div className='relative w-[130px] h-[50px]'>
          <input type='file'
          name='photo'
          id='customFile'
          onChange={handleFileChange}
          accept='.jpg, .png'
          className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
          <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full 
          flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden
           bg-[#DBDBDB] text-textColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
        </div>
      </div>
      <div className='mt-7'>
        <button type='sbmit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg'>Sign Up</button>
      </div>

      <p className='mt-5 text-textColor text-center'>Already have an account? 
      <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link>
      </p>
          </form>
      </div>
    </section>
  )
}

export default Signup
