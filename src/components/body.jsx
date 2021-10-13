import React from "react";
import "./body.css";
import ContactList from "./contactList";

export default function Body(props) {
  return (
    <div id="body">
      <ContactList
        contacts={props.contacts}
        onDelete={props.onDelete}
      ></ContactList>
    </div>
  );
}
