import { signInWithPopup, OAuthProvider } from "firebase/auth"
import { auth } from "../config";

const microsoftProvider = new OAuthProvider("microsoft.com")

export function signInByMicrosoft() {
    signInWithPopup(auth, microsoftProvider)
        .then(result => {
            const { accessToken, idToken } = OAuthProvider.credentialFromResult(result);
        })
        .catch((error) => {
            console.log({ error })
        })
}