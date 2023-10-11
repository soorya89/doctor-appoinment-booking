import {useState, useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {authContext} from '../../context/AuthContext.jsx'
import { BASE_URL } from '../../config.js'
import HashLoader from 'react-spinners/HashLoader'

function Login() {
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const [loading,setLoading] = useState(false)
  const navigate= useNavigate()
  const {dispatch} = useContext(authContext)

  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const res= await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result =await res.json()

      if(!res.ok){
        throw new Error(result.message)
      }

      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
          token:result.token,
          role:result.role
        }
      })
      console.log(result, "login data");

      setLoading(false)
      toast.success(result.message)
      navigate('/home')
      
    }catch(err){
      toast.error(err.message)
      setLoading(false)
    }
  };

  return (
  <section className="px-5 lg:px-0">
    <div className='w-full max-w-[570px] mx-auto round-lg shadow-md md:p-10'>
      <h3 className='text-textColor text-[22px] leading-9 font-bold mb-10'>Hello! <span className='text-primaryColor '>  Welcome</span>  Back...</h3>
    

    <form className='py-4 md:py-0' onSubmit={submitHandler}>
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
        <button type='sbmit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg'>{loading ?<HashLoader size={25} color='#fff'/>:'Login'}</button>
      </div>

      <p className='mt-5 text-textColor text-center'>Don't have an account? 
      <Link to='/register' className='text-primaryColor font-medium ml-1'>Signup</Link>
      </p>
    </form>
    </div>
  </section>
  )
}

export default Login
