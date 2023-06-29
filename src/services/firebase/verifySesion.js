import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";

export function verifySesion() {
    onAuthStateChanged(auth, user => {
        console.log(user)
    })
}