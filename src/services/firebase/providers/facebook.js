import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../config";

const facebookProvider = new FacebookAuthProvider()

export function signInByFacebook() {
    signInWithPopup(auth, facebookProvider)
        .then(result => {
            const { user } = result;
            const { accessToken } = FacebookAuthProvider.credentialFromResult(result)
            console.log({ user, accessToken })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log("error:", error)
        })
}