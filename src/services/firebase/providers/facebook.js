import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../config";

const facebookProvider = new FacebookAuthProvider()

export async function signInByFacebook() {
    try {
        const result = await signInWithPopup(auth, facebookProvider)
        FacebookAuthProvider.credentialFromResult(result)
    } catch (err) {
        FacebookAuthProvider.credentialFromError(err);
    }
}