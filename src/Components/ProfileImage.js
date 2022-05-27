import React, { useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../Contexts/AuthContext'
import UploadImage from './UploadImage';
function ProfileImage() {
    const { currentUser } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState(process.env.PUBLIC_URL + '/Images/profileImgDefault.jpg')
    
    function handleChange(e) {
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    }
    
    function handleUpload(){
        UploadImage(photo, currentUser, setLoading)
    }

    useEffect(() =>{
        if(currentUser?.photoURL){
            setPhotoURL(currentUser.photoURL)
        }
    }, [currentUser])

  return (

    <div className='profilePage'>
        <div className='profileInfoContainer'>
            <h2>Personal Information</h2>
            <p className='profileInfo'><strong>Email:</strong> {currentUser.email}</p>
        </div>
        <div className='changeProfileImgContainer'>
            <h2>Change Profile Photo</h2>
            <Avatar className='changeProfileImg'
                src={photoURL}
                sx={{ width: 150, height: 150 }}
            />
            <input type='file' onChange={handleChange}/>
            <button className='uploadImageBtn' disabled={loading || !photo} onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}

export default ProfileImage