import React, { useContext, useState, useEffect } from 'react'
import 'firebase/compat/auth'
import { auth } from '../Firebase'
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
          setCurrentUser(auth.currentUser);
          localStorage.setItem('userUID', auth.currentUser.uid);
          return;
        }
        setIsAuthenticated(false);
        return;
    });

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        localStorage.removeItem('userUID', auth.currentUser.uid)
        return auth.signOut()
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubscribe  
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
        isAuthenticated
    }
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
  )
}