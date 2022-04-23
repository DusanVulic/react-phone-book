import { useState } from "react";

import { projectAuth } from "../firebase/config";

import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = async(email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
            //signup user
            const response = await projectAuth.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(response.user);

            if (!response) {
                throw new Error("could not complete signup");
            }
            //add display name to user
            await response.user.updateProfile({ displayName });

            //dispatch login action

            dispatch({ type: "LOGIN", payload: response.user });

            setIsPending(false);
            setError(null);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
        }
    };

    return { error, isPending, signup };
};