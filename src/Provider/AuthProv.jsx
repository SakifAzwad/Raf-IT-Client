/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";



 
  
  export const AuthCon = createContext(null);
  
  const auth = getAuth(app);
  
  const googProv = new GoogleAuthProvider();
  
  const AuthProv = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const axiosPublic = useAxiosPublic();
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googProv);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (newUser) => {
        setUser(newUser);
        if (newUser) {
            // get token and store client
            const userInfo = { email: newUser.email };
            axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
        }
        else {
            localStorage.removeItem('access-token');
            setLoading(false);
        }
      });
      return () => {
        unSubscribe();
      };
    }, [axiosPublic]);
  
    const authInfo = { user,loading, createUser, signIn, logOut,signInWithGoogle };
  
    return <AuthCon.Provider value={authInfo}>{children}</AuthCon.Provider>;
  };
  
  export default AuthProv;