import { createContext, useContext } from "react";
import { useFirebaseAuth } from "../hooks/firebaseAuth";

const authContext = createContext({
    user: null,
    loading: true,
    closeSesion: () => {}
})

export const useAuth = () => useContext(authContext)

export const AuthContextProvider = ({ children }) => {
    const auth = useFirebaseAuth()
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

