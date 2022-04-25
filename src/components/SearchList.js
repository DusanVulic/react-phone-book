import React from "react";
import classes from "./ContactList.module.css";

//import user
import { useAuthContext } from "../hooks/useAuthContext";
//

const SearchList = ({ searchData }) => {
  const { user } = useAuthContext();

  return (
    <>
      <div className={classes.wrap}>
        {searchData &&
          searchData.map((data) => {
            const { id, nameData, company, email, phone, additionalInfo, uid } =
              data;

            //  conditional rendering if uid from the searced data is equal with user who created it(same user is looged in )
            if (uid === user.uid) {
              return (
                <article key={id} className={classes}>
                  <div className={classes.header}>
                    <h3 className={classes.name}>{nameData}</h3>
                  </div>

                  <div>
                    <h3>{company}</h3>
                    <p>{email}</p>
                    <a href={"tel:" + { phone }} className={classes.phone}>
                      pozovi {phone}
                    </a>
                    <p className={classes.big_screeen_phone}>{phone}</p>
                    <p>{additionalInfo}</p>
                  </div>
                </article>
              );
            } else {
              return (
                <p key={id} className={classes.no_contact}>
                  Sorry, no contact matched your criteria
                </p>
              );
            }
          })}
      </div>
    </>
  );
};

export default SearchList;
