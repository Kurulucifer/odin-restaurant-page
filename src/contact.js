function createContact() {
    const contact = document.createElement("div");
    contact.className = "contact";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Contact";

    const desc = document.createElement("div");
    desc.textContent = "Want to lodge an order? Send fanmail? Or issue a stern protest? Here's how!";

    const contacts = document.createElement("div");
    contacts.className = "contacts";

    const contact1 = createContactItem(
        "Main Address",
        "831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean",
    );
    const contact2 = createContactItem(
        "PO Box",
        "124 Conch Street, Bikini Bottom, Pacific Ocean",
    );
    const contact3 = createContactItem(
        "Order Number",
        "727-571-8080",
    );
    const contact4 = createContactItem(
        "Consultation Number",
        "727-258-9653",
    );
    const contact5 = createContactItem(
        "Email Address",
        "krustykrab@kmail.com",
    );

    contacts.appendChild(contact1);
    contacts.appendChild(contact2);
    contacts.appendChild(contact3);
    contacts.appendChild(contact4);
    contacts.appendChild(contact5);

    contact.appendChild(title);
    contact.appendChild(desc);
    contact.append(contacts);


    return contact;
}

function createContactItem(name, desc) {
    const contactLine = document.createElement("div");
    contactLine.className = "contact-line";
    const contactLineItem = document.createElement("div");
    contactLineItem.className = "contact-line-item";
    contactLineItem.textContent = name;
    const contactLineItemText = document.createElement("div");
    contactLineItemText.textContent = desc;

    contactLine.appendChild(contactLineItem);
    contactLine.appendChild(contactLineItemText);

    return contactLine;
} 


export default createContact;