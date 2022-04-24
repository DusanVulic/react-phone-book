import { useReducer, useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null,
};

const firestoreReducer = (state, action) => {
    if (action.type === "IS_PENDING") {
        return {
            isPending: true,
            document: null,
            success: false,
            error: null,
        };
    }
    if (action.type === "ADDED_DOCUMENT") {
        return {
            isPending: false,
            document: action.payload,
            error: null,
            success: true,
        };
    }
    if (action.type === "ERROR") {
        return {
            isPending: false,
            document: null,
            success: false,
            error: action.payload,
        };
    }

    return state;
};

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    //collection
    const ref = projectFirestore.collection(collection);

    //only dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    };

    //add a document
    const addDocument = async(doc) => {
        dispatch({ type: "IS_PENDING" });
        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({...doc, createdAt });
            dispatchIfNotCancelled({
                type: "ADDED_DOCUMENT",
                payload: addedDocument,
            });
        } catch (error) {
            dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
        }
    };

    //delete a document
    const deleteDocument = async(id) => {};

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { addDocument, deleteDocument, response };
};