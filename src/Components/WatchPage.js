import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from "react-router-dom";

const API_KEY = ''; // Replace with your API key

const WatchPage = (props) => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();
    console.log('searchParams', searchParams.get("v"))
    const videoId = searchParams.get('v');

    useEffect(() => {
        dispatch(closeMenu());

        if (videoId) {
            fetchComments(videoId);
        }
    }, [videoId, dispatch]);
    const fetchComments = async (videoId) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
            );
            const data = await response.json();
            setComments(data.items);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    console.log('props', comments)
    return (
        <div className='m-10'>
            <iframe
                width="900"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            
            <div className=''><h2 className='text-2xl font-bold p-4'>Comments</h2>
                {comments.length > 0 ? (
                    <ul className=''>
                        {comments.map((commentThread) => (
                            <li key={commentThread.id}>
                                <div className='my-2 p-2 flex rounded-lg w-5/6'>
                                    <div className='w-20' >
                                        <img src={commentThread.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="icon" className='px-2 rounded-full w-14' />
                                    </div>
                                    <div className=''>
                                        <strong>{commentThread.snippet.topLevelComment.snippet.authorDisplayName}</strong>
                                        <p className='p-2'> {commentThread.snippet.topLevelComment.snippet.textDisplay}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments available.</p>
                )}
                </div>
                <div>
                    asdf

                </div>
            
        </div>
    )
}

export default WatchPage