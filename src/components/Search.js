import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { projectFirestore } from "../firebase/config";

// styles
import classes from "./Search.module.css";

import SearchList from "./SearchList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("phonebook").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No contacts to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(() => {
            let filteredContacts = results.filter((contact) =>
              contact.nameData.toLowerCase().includes(query.toLowerCase())
            );
            console.log(filteredContacts);
            return filteredContacts;
          });

          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [query]);

  return (
    <div>
      <h2 className={classes.title}>Contacts including "{query}"</h2>
      {error && <p className={classes.error}>{error} ....</p>}
      {isPending && <p className={classes.loading}>Loading...</p>}
      {data && <SearchList searchData={data} />}
    </div>
  );
}
