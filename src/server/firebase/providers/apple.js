import { OAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../config";

const appleProvider = new OAuthProvider("apple.com")
appleProvider.addScope('email')
appleProvider.addScope('name')


export function signInByApple() {
    signInWithPopup(auth, appleProvider)
        .then(result => {
            const { user } = result;
            const { accessToken, idToken } = OAuthProvider.credentialFromResult(result)
            console.log({ user, accessToken, idToken })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = OAuthProvider.credentialFromError(error);
            console.log(error)
        })
}