import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const url = YOUTUBE_VIDEOS_URL
    useEffect(() => {
        getVideos();
    }, [])
    const getVideos = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setVideos(json.items)
    }
    console.log('videos', videos)
    return (
        <div className='flex flex-wrap justify-between m-2 p-2'>
            {videos.map((video)=>(
                <Link to={"/watch?v="+video.id}><VideoCard info={video} key={video?.id}/></Link>
            ))}
        </div>
    )
}

export default VideoContainer