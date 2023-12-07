import React ,{useState,useContext} from 'react'

import userImg from '../../assets/images/user-profile.png'
import MyBookings from './MyBookings';
import Profile from './Profile';
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading'

const MyAccount = () => {

const [tab,setTab] = useState('bookings')

const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)
console.log(userData,'userdata');
  return (
   <section>
     <div className='max-w-[1170px] px-4   mx-auto'>
    
      <div className='grid md:grid-cols-3 gap-10'>
        <div className='pb-[50px] px-[30px] rounded-md'>
          <div className='flex items-center justify-center'>
            <figure className='w-[200px] h-[200px]'>
              <img className ='w-full h-full 'src={userImg} alt='' />
            </figure>
          </div>
          <div className='text-center mt-4'>
          <label className='flex justify-center leading-7 mb-5'>
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
           
          />
          <div className='w-[200px] py-1 px-4 bg-blue-500 text-white rounded-md'>Change Photo</div>
        </label>           
         <h3 className='text-[18px] leading-[30px] text-textColor font-bold '>Example</h3>
            <p className='text-textColor leadind-[30px] text-[15px] font-medium'>Example@gmail.com</p>
            <p className='text-textColor leadind-[30px] text-[15px] font-medium'>Blood Type: <span className='ml-2 text-textColor text-[22px] leading-8'>o-ve</span></p>
          </div>
         
          <div className='w-[200px] py-1 px-4 bg-[#F36F75] text-white rounded-md'>Delete My Account</div>
        </div>

        <div className='md:col-span-2 md:px-[30px] '>
          <div>
            <button onClick={()=>setTab('bookings')} className={`${tab==='bookings'&& 'bg-primaryColor text-white font-normal' } p-2 mr-5 px-5 rounded-md text-textColor font-semibold text-[16px] 
            leading-7 border border-solid border-primaryColor`}>My Bookings</button>
            <button onClick={()=>setTab('settings')} className={`${tab==='settings'&& 'bg-primaryColor text-white font-normal' } p-2 mr-5 px-5 rounded-md text-textColor font-semibold text-[16px] 
            leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
          </div>
          {
            tab=== 'bookings' && <MyBookings />
          }
          {
            tab=== 'settings' && <Profile />
          }
        </div>
      </div>
   
      
    </div>
   </section>
  )
}

export default MyAccount
