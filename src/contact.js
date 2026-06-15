function createContact() {
    const contact = document.createElement("div");
    contact.className = "contact";

    contact.textContent = "here's how to get in contact";

    return contact;
}

export default createContact;