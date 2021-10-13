export default class Contact {

    constructor(name, number){
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
    }

    static fromJson(json) {
        let contact = new Contact();
        contact.id = json.id;
        contact.name = json.name;
        contact.number = json.number;

        return contact;
    }
}
