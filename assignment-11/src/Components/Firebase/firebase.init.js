// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinit = () => {
    return initializeApp(firebaseConfig);
}

// const analytics = getAnalytics(app);
export default firebaseinit;