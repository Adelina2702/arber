import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/FireBase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";

export const authContext = createContext();
const INIT_STATE = {
    user: '',
    forgotPassword: '',
}; 

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload };
        case "LOGOUT_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({
                    type: "LOGIN_USER",
                    payload: user,
                });
            } else {
                dispatch({
                    type: "LOGOUT_USER",
                    payload: '',
                });
            }
        });
    }, []);

    const createUserWithEmailAndPasswordHandler = async (email, password) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            let gg = {
                username : email
            }
           localStorage.setItem('user', JSON.stringify(gg))
        } catch (e) {
            console.log(e);
        }
    };

    const logOut = async () => {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: "LOGOUT_USER",
                    payload: '',
                });
                localStorage.removeItem('user')
            })
            .catch((e) => {
                console.log(e);
            });
    };
    let adminEmail = 'aadelya2702@gmail.com';

    const loginUserWithEmail = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            let gg = {
                username: email
            }
            localStorage.setItem('user', JSON.stringify(gg))
        } catch (e) {
            console.log(e);
        }
    };

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, {
            url: "http://localhost:8001/watches",
        });
    }
    return (
        <authContext.Provider
            value={{
                createUserWithEmailAndPasswordHandler,
                loginUserWithEmail,
                logOut,
                forgotPassword,
                user: state.user,
                adminEmail
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;
