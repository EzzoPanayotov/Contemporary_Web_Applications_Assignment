import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
// import Moment from 'react-moment'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import { useAuth } from '../Contexts/AuthContext'
import { Link } from 'react-router-dom'
import moment from 'moment'
import '../App.css'
import PostButtons from './PostButtons'


function PostCard() {
    const { currentUser } = useAuth()
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('')
    
    useEffect(() =>{
        
        const getPosts = async () =>{
            const postsRef = collection(db, 'posts')
            const data = await getDocs(postsRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    }, [])

    const deletePost = async (id) =>{
        const postDoc = doc(db, 'posts', id)
        alert('Post Deleted')
        return await deleteDoc(postDoc)
    } 

    const [openSettings, setOpenSettings] = useState(false);

    const getPostId = (id) =>{
        const postIdFromDoc = doc(db, 'posts', id)
        setPostId(postIdFromDoc)
        // console.log(id)
        if(postIdFromDoc.id === id){
            setOpenSettings(!openSettings)
        }

    }

  return (
    <div className='postCardMain'>
        {posts.map((post) => { return <div className='postCard' key={post.id}>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <Avatar className='cardProfileImage'
                            src={post.userProfileImg}
                            sx = {{width: 40, height: 40, position: 'unset'}}/> 
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>{post.userName}</p>
                        <p className='timePosted'>{moment(post.date).local().startOf('seconds').fromNow()}</p>
                    </div>
                </div>
                {currentUser ?
                <div className='cardSettingsOuter'>
                {currentUser.uid === post.userID &&
                <div className='cardSettingsContainer'>
                    {postId.id === post.id && 
                    <div>
                        {openSettings ? 
                            <div className='cardSettingsBtns'>
                                <Link to = '/your-questions'>
                                    <button className='editBtn'>Edit</button>
                                </Link>
                                <button className='deleteBtn' onClick={() => {deletePost(post.id)}}>Delete</button>
                            </div>:''
                        }
                    </div>
                    } 
                    <button className='cardSettings' 
                        onClick={() => getPostId(post.id)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                }
                </div>:''
                }
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>{post.title}</p>
                </div>
                <div className='cardQuestion'>
                    <p>{post.question}</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>{post.tags}</p>
                    </div>
                    <div className='tag'>
                        <p>{post.tags}</p>
                    </div>
                    <div className='tag'>
                        <p>{post.tags}</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>})}
    </div>
    
  )
}

export default PostCard