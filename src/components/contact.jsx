import React from "react";
import "./contact.css"

export default function Contact(props) {
  return (
    <li key={props.contact.id} className="contactItem">
      <div className="Holder">
        <p className="name">{props.contact.name}</p>
        <p className="number">{props.contact.number}</p>
      </div>
      <img
        src="./Icon ionic-ios-trash.svg"
        alt="remove"
        onClick={(e) => {
          props.onDelete(props.contact);
        }}
      />
    </li>
  );
}
