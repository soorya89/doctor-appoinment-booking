import {useEffect,useRef,useContext} from 'react'
import logo from '../../../assets/images/logo.png'
import {NavLink,Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import { authContext } from '../../../context/AuthContext'

const navLinks=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctor',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  }
]
const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user,role,token} = useContext(authContext)

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
                  {
                    token && user ? (<div>
                    <Link to={`${role==='doctor'? '/doctor/profile': '/user/profile'}`}>
                    <p className='text-textColor text-[16px] leading-7 font[500]'>{user?.name}</p>
                    </Link>
                  </div>) :   (<Link to='/login'>
                      <p className='text-primaryColor font-[600]'>Login</p>
                    </Link>)
                  }
                    
                  
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
