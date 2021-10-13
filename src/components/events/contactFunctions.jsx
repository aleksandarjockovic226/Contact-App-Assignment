import Contact from "./contact";

export default class ContactFunctions {
  constructor() {
    this.contacts = this.loadFromLocalStorage();
  }
  add(contact) {
    this.contacts.push(contact);
    this.saveToLocalStorage();

    return this.contacts;
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    this.saveToLocalStorage();

    return this.contacts;
  }
  saveToLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }

  loadFromLocalStorage() {
    var json = localStorage.getItem("contacts");

    if (json === null) return [];
    
    let jsonParsed = JSON.parse(json, (key, value) => {
      if (key === "contact") {
        value = new Contact(value);
      }
      return value;
    });

    if (jsonParsed.lenght === 0) return [];

    let contacts = [];

    for (let i = 0; i < jsonParsed.length; i++) {
      contacts.push(Contact.fromJson(jsonParsed[i]));
    }
    return contacts;
  }
}
