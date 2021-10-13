import React from "react";
import Contact from "../components/contact";
import "./contactList.css";

export default function ContactList(props) {
  return (
    <ul>
      {props.contacts.map(function (value, index) {
        return (
          <Contact
            key={index}
            contact={value}
            onDelete={props.onDelete}
          ></Contact>
        );
      })}
    </ul>
  );
}
