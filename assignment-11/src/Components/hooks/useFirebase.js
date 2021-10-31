import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinit from "../Firebase/firebase.init";
firebaseinit()


const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState([]);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

      
  useEffect(()=>{
    const unsibscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({});
        }
        setIsLoading(false);
      });
      return () => unsibscribed;
},[])

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }


    const logout = () =>{
          signOut(auth).then(() => {
              setUser([]);
          }).catch((error) => {
              setError(error.message);
          })
          .finally(()=> setIsLoading(false));
      }

      return {
        user,
        googleSignIn,
        setUser,
        setError,
        setIsLoading,
        signOut,
        logout,
        isLoading,
        error
      }
}

export default useFirebase;