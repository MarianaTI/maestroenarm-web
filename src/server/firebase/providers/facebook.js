import { FacebookAuthProvider } from "firebase/auth"
import { auth } from "../config";

const facebookProvider = new FacebookAuthProvider()

signInWithPopup(auth, facebookProvider)
    .then(result => {
        const { user } = result;
        const { accessToken } = FacebookAuthProvider.credentialFromResult(result)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    })