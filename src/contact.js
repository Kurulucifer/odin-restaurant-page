function createContact() {
    const contact = document.createElement("div");
    contact.className = "contact";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Contact";

    contact.appendChild(title);

    return contact;
}

export default createContact;