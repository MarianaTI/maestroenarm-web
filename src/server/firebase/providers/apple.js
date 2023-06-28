import { OAuthProvider } from "firebase/auth"
import { app, auth } from "../config";


const appleProvider = new OAuthProvider("apple.com")

signInWithPopup(auth, appleProvider)
    .then(result => {
        const { user } = result;
        const { accessToken } = OAuthProvider.credentialFromResult(result)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = OAuthProvider.credentialFromError(error);
    })