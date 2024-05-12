import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext= createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createuser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });
            setUser(user);
            setLoading(false);
            return user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const signin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const logInWithGoogle=()=>{

        return signInWithPopup(auth, provider);

    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    })

    const AuthInfo={
         user,
         loading,
         createuser,
         signin,
         logout,
         logInWithGoogle

    }
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
