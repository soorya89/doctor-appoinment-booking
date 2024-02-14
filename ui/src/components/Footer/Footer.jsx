import React from 'react'
import {Link} from 'react-router-dom'
import logo from  '../../assets/images/logo.png'

const quickLinks =[
  {
    path:'/home',
    display:"Home"
  },
  {
    path:'/find-a-doctor',
    display:"Find a doctor"
  },
  {
    path:'/services',
    display:"Services"
  },
  {
    path:'/contact',
    display:"Contact"
  }
]
const Footer = () => {
  const year =new Date().getFullYear()
  return (
    <footer className=' pb-16 pt-10'>
    <div className='container '>
      <div className='flex justify-between flex-col-3 md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt='' />
        </div>
          <div>
            <h2 className='text-[20px] leadind-[30px] font-[700] mb-6 text-textColor'>Quick Links</h2>
           <ul> 
            {quickLinks.map((item,index)=><li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
              </ul>
          </div>
        <div>
          <p className='text-[16px] leadind-7 font-[400] text-textColor mt-4'>Copyright @ {year} developed by Soorya all right reserved</p>
        </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer
