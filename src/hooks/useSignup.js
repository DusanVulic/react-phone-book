import { useState, useEffect } from "react";

import { projectAuth } from "../firebase/config";

import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = async(email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(response.user);

            if (!response) {
                throw new Error("could not complete signup");
            }

            await response.user.updateProfile({ displayName });

            //dispatch login action

            dispatch({ type: "LOGIN", payload: response.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (error) {
            if (!isCancelled) {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { signup, error, isPending };
};