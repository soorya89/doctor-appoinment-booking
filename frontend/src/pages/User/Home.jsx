import React from 'react'
import hero from '../../assets/images/hero.png'
import finddoctor from '../../assets/images/find-a-doctor.png'
import findlocation from '../../assets/images/find-a-location.png'
import bookappoinment from '../../assets/images/book-an-appoinment.png'
import service01 from '../../assets/images/service01.png'
import service02 from '../../assets/images/service02.png'
import service03 from '../../assets/images/service03.png'
import service04 from '../../assets/images/service04.png'
import service05 from '../../assets/images/service05.png'
import service06 from '../../assets/images/service06.png'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import ServiceList from '../../components/User/Services/ServiceList'

function Home() {
  return (
   
     <>
     {/* =======hero section====== */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'> 

          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-textColor text-b font-[800] md:text-[25px] md:leading-[30px]'>YOUR HEALTH,<br/> YOUR SCHEDULE BOOK WITH EASE.</h1>
                <p className='text_para mt-2'>We're here to simplify the process of booking appointments, so you can focus on what matters most – your health.</p>

                <buton className='btn'>Book an Appoinment</buton>
            </div>

            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] md:text-[30px] md:leading-[54px] font-[700] text-textColor'>30+</h2>
                <span className='w-[100px] h-2  rounded-full block mt-[-10px]'>Years of experience</span>                
            </div>
            <div>
                <h2 className='text-[36px] leading-[56px] md:text-[30px] md:leading-[54px] font-[700] text-textColor'>15+</h2>
                <span className='w-[100px] h-2  rounded-full block mt-[-10px]'>Clinic location</span>                
            </div>
            <div>
                <h2 className='text-[36px] leading-[56px] md:text-[30px] md:leading-[54px] font-[700] text-textColor'>100%</h2>
                <span className='w-[100px] h-2  rounded-full block mt-[-10px]'>Patient satisfaction</span>                
            </div>
          </div>

          

          </div>

        <div className='flex gap-[30px] justify-end '>
          <div>
            <img className =''src={hero} alt='' />
          </div>
          </div>  
        </div>
        </div>
      </section>
      {/* =======hero section end====== */}

      <section style={{paddingBottom:0}}>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>           
          </div>

          <div className='mt-[30px] px-5'>
            <div className='flex items-center justify-center gap-5'>
              <Link to='/doctors'><img src={finddoctor} alt='' /></Link>
              <Link to='/doctors'><img src={findlocation} alt='' /></Link>
              <Link to=''><img src={bookappoinment} alt='' /></Link>
            </div>
          </div>
        </div>
      </section>
      {/* =======hero section end====== */}
      
      
      {/* =======services section ====== */}
      <section style={{paddingBottom:0}}>
        <div className='container bg-[#E0F4FF]'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>our services</h2>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* =======services section end====== */}

    

      </>
  
  )
}

export default Home
