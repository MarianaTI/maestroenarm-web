import { signInWithPopup, OAuthProvider } from "firebase/auth"
import { auth } from "../config";

const microsoftProvider = new OAuthProvider("microsoft.com")

export async function signInByMicrosoft() {
    try {
        const result = await signInWithPopup(auth, microsoftProvider)
        OAuthProvider.credentialFromResult(result);
    } catch (err) {
        OAuthProvider.credentialFromError(err)
    }
}