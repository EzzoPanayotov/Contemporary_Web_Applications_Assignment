import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { useAuth } from '../Contexts/AuthContext'
import '../App.css'

function AskQuestion() {
    const { currentUser } = useAuth()
    const [newTags, setNewTags] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newQuestion, setNewQuestion] = useState('')
    const [posts, setPosts] = useState([]);
    // const [postId, setPostId] = useState('')
    const postsRef = collection(db, 'posts')

    const createPost = async (e) =>{
        e.preventDefault()
        await addDoc(postsRef, {userID: currentUser.uid, tags: newTags, title: newTitle, question: newQuestion, date: new Date()})
    }

    // const editPost = async (id, tags, title, question) =>{
    //     const postDoc = doc(db, 'posts', id)
    //     const newFields = {tags: tags, title: title, question: question}
    //     await updateDoc(postDoc, newFields)
    // }

    // const getPostId = (id) =>{
    //     setPostId(id)
    // }

    useEffect(() =>{

        const getPosts = async () =>{
            const data = await getDocs(postsRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
    }, [])

    // do this to read the data : 
    // console.log(posts.id) 
  return (
    <div className='registerComponent'>
      <div className='registerFormContainer'>
        <h2>Add a question</h2>
        {/* {error && <p className='RegisterError'>{error}</p>} */}
        {/* form here */}
        <form className='registerForm'>
            <input type='text' placeholder='Your Tags e.g.: #javascript'
                onChange={(event) => {setNewTags(event.target.value)}} required/>

            <input type='text'  placeholder='Your Title' 
                onChange={(event) => {setNewTitle(event.target.value)}}required/>

            <textarea type='text' placeholder='Type your question' 
                onChange={(event) => {setNewQuestion(event.target.value)}}required/>

          <button className='registerFormBtn' type='submit'>Cancel</button>
          <button className='registerFormBtn' type='submit' onClick={createPost}>Create</button>
        </form>
      </div>
      <div>
      {posts.map((post) => { return <div key={post.id}> 
          <p>Tags: {post.tags} </p>
          <p>Title: {post.title} </p>
          <p>Question: {post.question} </p>
          {/* <button onClick={(event) => editPost()}>Edit Post</button> */}
          {/* {console.log(postId)} */}
          </div>})}
      </div>

      <div></div>
    </div>

  )
}

export default AskQuestion