import { useEffect, useState } from "react";
import firebaseinit from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const useFirebase = () =>{
    firebaseinit();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);


    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser([]);
          }).catch((error) => {
            setError(error.message);
          });
    }

    return{
        user,
        error,
        googleSignin,
        logout,
        setError,
        setUser
    }
}

export default useFirebase;