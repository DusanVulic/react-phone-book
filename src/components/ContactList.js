import React from "react";

import classes from "./ContactList.module.css";

const ContactList = ({ phonebookData }) => {
  return (
    <>
      <div className={classes.wrap}>
        {phonebookData &&
          phonebookData.map((data) => {
            const { id, nameData, company, email, phone, additionalInfo } =
              data;

            return (
              <article key={id} className={classes}>
                <h2>{nameData}</h2>
                <h3>{company}</h3>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{additionalInfo}</p>
              </article>
            );
          })}
      </div>
    </>
  );
};

export default ContactList;
