import {useEffect,useRef} from 'react'
import logo from '../../../assets/images/logo.png'
import {NavLink,Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

const navLinks=[
  {
    path:'/admin',
    display:'Home'
  },
  {
    path:'/admin/doctor-list',
    display:'Doctor'
  },
  {
    path:'/admin/user-list',
    display:'Patient'
  },
  {
    path:'/admin/booking-list',
    display:'Booking'
  },
  {
    path:'/admin/doctor-approval',
    display:'Approval'
  },
]
const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  }

  useEffect(()=>{
    handleStickyHeader()

    return ()=>window.removeEventListener('scroll',handleStickyHeader)
  })

  const toggleMenu=()=> menuRef.current.classList.toggle('show__menu')
  return (
    <>
      <header className='header flex items-center' ref={headerRef}>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div >
                    <img className='w-[200px] ' src={logo} alt='' />
                </div>

                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                  <ul className="menu flex items-center gap-[2.7rem]">
                    {
                      navLinks.map((link,index)=><li key={index}>
                        <NavLink to={link.path} className={navClass=>navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font[600]': 'text-textColor text-[16px] leading-7 font[500] hover:text-primaryColor'}>
                          {link.display}
                        </NavLink>
                      </li>)
                    }
                  </ul>
                </div>

                <div className='flex items-center gap-4'>
                   
                    <Link to='/admin/login'>
                      <p className='text-primaryColor font-[600] '>Admin</p>
                    </Link>
                    <span className='md:hidden' onClick={toggleMenu}>
                      <BiMenu className='w-6 h-6 cursor-pointer'/>
                    </span>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header

