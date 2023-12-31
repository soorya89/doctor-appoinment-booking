import {useState} from 'react'


function Login() {
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  return (
  <section className="px-5 lg:px-0">
    <div className='w-full max-w-[570px] mx-auto round-lg shadow-md md:p-10'>
      <h3 className='text-textColor text-[22px] leading-9 font-bold mb-10'>Hello! <span className='text-primaryColor '>  Welcome</span>  To Admin</h3>
    

    <form className='py-4 md:py-0'>
      <div className='mb-5'>
        <input type='email'
         placeholder='Enter Your Email' 
         name='email' 
         value={FormData.email} 
         onChange={handleInputChange} 
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>
      <div className='mb-5'>
        <input type='password'
         placeholder='Password' 
         name='password' 
         value={FormData.password} 
         onChange={handleInputChange} 
         className='w-full  py-3 border-b border-solid border-[#0066ff1] 
         focus:outline-none focus:border-b-primaryColor text-[16px] leadind-7 
         text-textColor placeholder:text-[#6A7D93]  cursor-pointer' required />
      </div>

      <div className='mt-7'>
        <button type='sbmit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg'>Login</button>
      </div>

      
    </form>
    </div>
  </section>
  )
}

export default Login


