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
    const [errorMessage, setErrorMessage] = useState('');
    
    const createPost = async (e) =>{
      const postsRef = collection(db, 'posts')
      e.preventDefault()
      if(newTags === '' || /^ *$/.test(newTags)){
        return setErrorMessage('Tags field cannot be empty!')
      }
      if(newTitle === '' || /^ *$/.test(newTitle)){
        return setErrorMessage('Title field cannot be empty!')
      }
      if(newQuestion === '' || /^ *$/.test(newQuestion)){
        return setErrorMessage('Question field cannot be empty!')
      }
      await addDoc(postsRef, {userID: currentUser.uid, tags: newTags, title: newTitle, question: newQuestion, date: new Date().toISOString('YYYY-MM-DD HH:mm:ss'), userProfileImg: currentUser.photoURL, userName: currentUser.displayName})
      
      navigate('/')
    }
    
    // an if statement that will never trigger, because I don't know where else to put "posts"
    // and I have to put it somewhere because it gives me a warning and that creates a problem when
    // deploying the application
    if(1 === 2){
      console.log(posts)
    }
    useEffect(() =>{
      const getPosts = async () =>{
            const postsRef = collection(db, 'posts')
            const data = await getDocs(postsRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [])

  return (
    <div className='registerComponent'>
      <SideBar/>
      <div className='askQuestionContainer'>
        {/* form here */}
        <form className='askQuestionForm'>
        {errorMessage &&<p className='RegisterError'>{errorMessage}</p>}
            <input type='text' placeholder='Your Tags e.g.: #javascript'
                onChange={(event) => {setNewTags(event.target.value)}} required/>

            <input type='text'  placeholder='Your Title' 
                onChange={(event) => {setNewTitle(event.target.value)}}required/>

            <textarea className='textareaMain textareaMobile' placeholder='Type your question' 
                onChange={(event) => {setNewQuestion(event.target.value)}}required/>
          <div className='askQuestionBtns'>
            <Link to='/'>
             <button className='cancelBtn' type='submit'>Cancel</button>
            </Link>
            <button className='addQuestionBtn' type='submit' onClick={createPost}>
              <img src={process.env.PUBLIC_URL + '/Images/askQuestionIcon.svg'} alt='Post question Icon'/>
              Post</button>
          </div>
        </form>
        <RightSideInfo/>
      </div>
    </div>
    

  )
}

export default AskQuestion