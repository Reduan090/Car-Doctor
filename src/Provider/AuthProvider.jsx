import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../FireBase/firebase.config";

export const AuthContext = createContext();
const Auth = getAuth(app);

const AuthProvider = (props = {}) => {
    const { children } = props || {};

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password);
    } 

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logOut= () =>{
        setLoading(true);
        return signOut(Auth);
    }

    useEffect ( ()=>{
        const unsubscribe = onAuthStateChanged (Auth, currentUser =>{
            setUser(currentUser);
            console.log('Current User', currentUser)
            setLoading(false);
        });

        return unsubscribe();

    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;