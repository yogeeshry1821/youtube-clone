import React, { useState } from 'react'

const VideoCard = ({ info }) => {
    console.log('info', info)
    const handleChannelClick=()=>{
        
    }
    const handleVideoClick=()=>{
        
    }
    return (
        <>
            <div className='w-96 m-5'>
                <img src={info?.snippet?.thumbnails?.maxres?.url} className='cursor-pointer rounded-lg hover:rounded-none transition-all duration-300' alt="thumbnail" onClick={()=>handleVideoClick()}/>
                <div className='py-3 text-md font-semibold cursor-pointer '>{info?.snippet?.title}</div>
                <div className='py-2 text-md cursor-pointer text-gray-500' onClick={() => handleChannelClick()}>{info?.snippet?.channelTitle}</div>
                <div className='flex'>
                <div className=' text-gray-500'>{info?.statistics?.viewCount} Views  </div>
                </div>
        </div>
        </>
    )
}

export default VideoCard