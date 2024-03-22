import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import {FaBars} from 'react-icons/fa'


const NavBar = () => {
    const user = false

    const [prompt,setPrompt]=useState("")
    const [menu,setMenu]=useState(false)
    // const navigate=useNavigate()
    const path=useLocation().pathname
    
  
    const showMenu=()=>{
      setMenu(!menu)
    }
    

  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
        <h1 className='text-xl md:text-xl font-extrabold'><Link to='/'>Blog Market</Link></h1>
        <div className='flex justify-center items-start space-x-0'>
            <p><BsSearch/></p>
            <input className='outline-none px-3' placeholder='Search a post' type='text'/>
        </div>
        
        <div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
            {user? <h3><Link to='/write'>Write</Link></h3>:<h3><Link to='/login'>Login</Link></h3>}
            {user? <h3><Link to='/profile'>Profile</Link></h3>:<h3><Link to='/register'>Register</Link></h3>}
        </div>

        <div className='md:hidden lg'>
          <p><FaBars/></p>

        </div>
        
    </div>
  )
}

export default NavBar