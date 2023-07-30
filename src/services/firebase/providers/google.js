import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

const googleProvider = new GoogleAuthProvider()

export async function signInByGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        GoogleAuthProvider.credentialFromResult(result)
    } catch (err) {
        GoogleAuthProvider.credentialFromError(err)
    }
}


