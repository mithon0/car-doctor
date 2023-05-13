import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
export const AuthContext =createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoader]=useState(false);
    const googleSignIn =(googleProvider)=>{
      
       return signInWithPopup(auth,googleProvider);
    };
    const gitHubSignIn =(gitProvider)=>{
      
      return  signInWithPopup(auth,gitProvider);
    };
    const facebookSignin =(facebookProvider)=>{
      
        return signInWithPopup(auth,facebookProvider);
    };
    const signUpWithEmailPass=(email,password)=>{
      
       return createUserWithEmailAndPassword(auth,email,password);
    };
    const logInWithEmailPass =(email,password)=>{
      setLoader(true);
       return signInWithEmailAndPassword(auth,email,password);
    };
    const logOut=()=>{
      setLoader(true);
      return signOut(auth);
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
      
      setUser(loggedUser);
      });
      return ()=> {
         unSubscribe();
      }
    },[])


    
    var email = '';
    

    const Uuser = auth.currentUser;
    if (Uuser !== null) {
        email = Uuser.email
    }

    const authInfo={
        googleSignIn,
        gitHubSignIn,
        facebookSignin,
        signUpWithEmailPass,
        logInWithEmailPass,
        user,
        logOut,
        loading,
        email

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;