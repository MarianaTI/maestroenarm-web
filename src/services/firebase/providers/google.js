import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

const googleProvider = new GoogleAuthProvider()

export function signInByGoogle() {
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
}