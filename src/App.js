import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import Contact from "./components/events/contact";
import ContactFunctions from "./components/events/contactFunctions";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.contacT = new ContactFunctions();

    this.state = {
      contacts: this.contacT.contacts,
    };

    this.createContact = this.createContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  createContact(name, number) {
    let contact = new Contact(name, number);
    let contacts = this.contacT.add(contact);

    this.setState({ contacts: contacts });
  }

  deleteContact(contact) {
    let contacts = this.contacT.delete(contact);
    this.setState({ contacts: contacts });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Body
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        ></Body>
        <Footer createContact={this.createContact}></Footer>
      </div>
    );
  }
}
