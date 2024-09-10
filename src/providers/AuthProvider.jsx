import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const updateUser = async (name, photo) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const signInWithPassword = async (email, password) => {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        return userCredential;

    }

    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setLoading(false);
            return result;
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        } finally {

        }
    }

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current user: ", currentUser);
            setUser(currentUser);


            // Get and Set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                    .then(data => {
                        console.log("Token generated: ", data.data.token);
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })

            } else {
                localStorage.removeItem('access-token');
            }


        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        loginWithGoogle,
        createUser,
        updateUser,
        signInWithPassword,
        logOut,
        setUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
