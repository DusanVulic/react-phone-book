import React from "react";

import classes from "./ContactList.module.css";

//import firestorea
import { useFirestore } from "../hooks/useFirestore";
//

const ContactList = ({ phonebookData }) => {
  const { deleteDocument } = useFirestore("phonebook");

  return (
    <>
      <div className={classes.wrap}>
        {phonebookData &&
          phonebookData.map((data) => {
            const { id, nameData, company, email, phone, additionalInfo } =
              data;

            return (
              <article key={id} className={classes}>
                <div className={classes.header}>
                  <h3 className={classes.name}>{nameData}</h3>
                  <button
                    className={classes.delete_btn}
                    onClick={() => deleteDocument(id)}
                  >
                    x
                  </button>
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
          })}
      </div>
    </>
  );
};

export default ContactList;
