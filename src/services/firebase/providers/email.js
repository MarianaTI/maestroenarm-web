import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export function signUpByMaestroEnarm(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { console.log(userCredential.user) })
        .catch(({ code, message }) => {
            const errorCode = code;
            const errorMessage = message;
            console.log({ errorCode, errorMessage })
            throw new Error(errorMessage)
        });
}

export function signInByMaestroEnarm(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { console.log(userCredential.user) })
        .catch(({ code, message }) => {
            const errorCode = code;
            const errorMessage = message;
            console.log({ errorCode, errorMessage })
        });
}    

