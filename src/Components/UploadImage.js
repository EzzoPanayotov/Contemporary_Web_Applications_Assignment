import { storage } from '../Firebase';
import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export async function UploadImage(file, currentUser, setLoading){
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true)
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {photoURL});
    setLoading(false)
    alert('Uploaded file')
}


export default UploadImage