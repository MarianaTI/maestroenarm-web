import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvide, OAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"
// import { getFirestore, collection, getDocs } from "firebase/firestore" 
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    appId: process.env.FIREBASE_APP_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    storageBucket: process.env.FIREBASE_STORE_BUCKET
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

//TODO: separate into diferents modules 

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { const user = userCredential.user })
    .catch(({ code, message }) => {
        const errorCode = code;
        const errorMessage = message;
    });


signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { const user = userCredential.user; })
    .catch(({ code, message }) => {
        const errorCode = code;
        const errorMessage = message;
    });


//auth by google
const googleProvider = new GoogleAuthProvider()
//auth by facebook
const facebookProvider = new FacebookAuthProvider()
//auth by apple
const appleProvider = new OAuthProvider("apple.com")

signInWithPopup(auth, googleProvider)
    .then(result => {
        const { user } = result;
        const { accessToken } = GoogleAuthProvider.credentialFromResult(result);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    })