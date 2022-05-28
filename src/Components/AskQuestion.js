import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import { collection, getDocs, addDoc} from 'firebase/firestore'
import { useAuth } from '../Contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import SideBar from './SideBar'
import RightSideInfo from './RightSideInfo'

function AskQuestion() {
    const navigate = useNavigate();
    const { currentUser } = useAuth()
    const [newTags, setNewTags] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newQuestion, setNewQuestion] = useState('')
    const [posts, setPosts] = useState([]);
    // const [editPostInfo, setEditPostInfo] = useState('')
    
    const createPost = async (e) =>{
      const postsRef = collection(db, 'posts')
      e.preventDefault()
      await addDoc(postsRef, {userID: currentUser.uid, tags: newTags, title: newTitle, question: newQuestion, date: new Date().toISOString('YYYY-MM-DD HH:mm:ss'), userProfileImg: currentUser.photoURL, userName: currentUser.displayName})
      
      navigate('/')
    }
    
    useEffect(() =>{
      const getPosts = async () =>{
            const postsRef = collection(db, 'posts')
            const data = await getDocs(postsRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [])

    // useEffect(() =>{
    //   console.log('The id here is: ' + editPostInfo)
    //   // if(editPostInfo !== undefined && editPostInfo !== ''){
    //   //   // 
    //   // }
    // }, [])
  return (
    <div className='registerComponent'>
      <SideBar/>
      <div className='askQuestionContainer'>
        {/* {error && <p className='RegisterError'>{error}</p>} */}
        {/* form here */}
        <form className='askQuestionForm'>
            <input type='text' placeholder='Your Tags e.g.: #javascript'
                onChange={(event) => {setNewTags(event.target.value)}} required/>

            <input type='text'  placeholder='Your Title' 
                onChange={(event) => {setNewTitle(event.target.value)}}required/>

            <textarea type='text' placeholder='Type your question' 
                onChange={(event) => {setNewQuestion(event.target.value)}}required/>
          <div className='askQuestionBtns'>
            <Link to='/'>
             <button className='cancelBtn' type='submit'>Cancel</button>
            </Link>
            <button className='addQuestionBtn' type='submit' onClick={createPost}>Add/Update</button>
          </div>
        </form>
        <RightSideInfo/>
      </div>
    </div>
    

  )
}

export default AskQuestion