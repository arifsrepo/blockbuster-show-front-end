import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken  } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import firebaseinit from "../../Firebase/firebase.init";

firebaseinit()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('Not Given');
    const [number, setNumber] = useState('Not Given');
    const [error, setError] = useState('');
    const [authloading, setAuthloading] = useState(true);
    const [detLoading, setDetLoading] = useState(true);
    const [accountDetails, setAccountDetails] = useState({});
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const history = useHistory();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(()=>{
        setAuthloading(true);
        const unsibscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
                setUser(user);
            } else {
                setUser({});
            }
            if(authloading){
                setAuthloading(false)
            }
        });
        return () => unsibscribed;
    },[])


    const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)
        }

    const registerUser = (email, password, address) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                saveUser(email, name, address, number,'POST')
                history.push('/');
            })
            .catch((error) => {
                setError(error.message);
            });
        }
    
    const emailSignIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
        }

    const logout = () => {
            signOut(auth).then(() => {
                setUser({});
                setAccountDetails({});
                history.push('/');
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
        }

    const saveUser = ( email, displayName, address, number, method ) => {
        const user = { email, displayName, address, number };
        console.log(user)
        fetch('http://localhost:5000/users', {
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }

    useEffect(() => {
        if(user?.email){
                console.log(`http://localhost:5000/userdetails?email=${user.email}`);
                fetch(`http://localhost:5000/userdetails?email=${user.email}`)
                .then(res => res.json())
                .then(details => {
                    if(details?.email){
                        if(!accountDetails?.email){
                            setAccountDetails(details);
                        }
                    }
                })
                if(accountDetails?.email){
                    setDetLoading(false)
                }
            }
        },[user])

    if(detLoading){
        if(accountDetails?.email){
        setDetLoading(false);
        }
    }

    console.log('Account Details From End Of Firebase : ', accountDetails);

    return {
        googleSignIn,
        registerUser,
        emailSignIn,
        email,
        setEmail,
        password,
        setName,
        setPassword,
        setAddress,
        address,
        setNumber,
        number,
        user,
        setUser,
        saveUser,
        authloading,
        accountDetails,
        detLoading,
        setDetLoading,
        error,
        setError,
        logout
    }
}

export default useFirebase;