import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinit = () =>{
    return initializeApp(firebaseConfig);
}

export default firebaseinit;