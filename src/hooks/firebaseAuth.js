import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../services/firebase/config";

const formatUser = ({ uid, email, photoURL, displayName }) => ({ uid, email, photoURL, displayName })

export const useFirebaseAuth = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const authStateChanged = async (authState) => {
        if (!authState) {
            setUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        setUser(formatUser(authState));
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    const closeSesion = () => signOut(auth).then()

    return {
        user,
        loading,
        closeSesion
    };

}

