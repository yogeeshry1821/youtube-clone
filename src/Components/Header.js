import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch=useDispatch();
    const handleMenuClick=()=>{
        dispatch(toggleMenu())
    }
    const handleLogoClick=()=>{
        
    }
    return (
        <div>
            <div className='grid p-2 mt-2 shadow-md grid-flow-col'>
                <div className='flex' >
                    <img alt="menu-icon" onClick={()=>handleMenuClick()} className=" cursor-pointer h-5 px-5 " src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png' />    
                    <a href="/">
                        <img alt="logo" onClick={() => handleLogoClick()} className="h-5 cursor-pointer" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png' />  
                    </a>
                                  
                </div>
                <div className='flex'>
                    <input placeholder='Search' className='p-2  w-full rounded-l-full border border-gray-400' type='text' />
                    <button className='rounded-r-full bg-gray-200 p-2 border border-gray-400'> Search</button>
                </div>
                <div className='flex justify-end'>
                    <img alt="user-icon"  className='h-8'  src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Header