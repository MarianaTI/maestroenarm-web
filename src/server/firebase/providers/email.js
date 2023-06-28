import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { const user = userCredential.user })
    .catch(({ code, message }) => {
        const errorCode = code;
        const errorMessage = message;
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { const user = userCredential.user; })
    .catch(({ code, message }) => {
        const errorCode = code;
        const errorMessage = message;
    });
