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
    <div>
        <Avatar
            src={photoURL}
            sx={{ width: 50, height: 50 }}
        />
        <div>
            <input type='file' onChange={handleChange}/>
        <button className='uploadImageBtn' disabled={loading || !photo} onClick={handleUpload}>Upload</button>
    </div>
    </div>
  )
}

export default ProfileImage