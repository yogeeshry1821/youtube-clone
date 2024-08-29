import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    return !isMenuOpen ? null : (
        <div className='pb-5 px-5 '>
            <ul className='p-2 text-lg cursor-pointer'>
                <Link to="/">
                    <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'> 
                        Home
                    </li>
                </Link>
                <Link to="/">
                    <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                        Shorts
                    </li>
                </Link>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Subscriptions
                </li>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    You
                </li >
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    History
                </li>


            </ul>
            <h1 className='text-lg px-2 pb-2 font-bold'>Explore</h1>
            <ul className='px-3 cursor-pointer '>
                <li className='my-2 py-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Live
                </li>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Movies
                </li>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Music
                </li>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Gaming
                </li>
                <li className='py-2 my-2 hover:bg-gray-200 p-3 rounded-lg transition-all duration-200'>
                    Trending
                </li>


            </ul>
        </div>
    )
}

export default Sidebar