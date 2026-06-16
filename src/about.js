function createAbout() {
    const about = document.createElement("div");
    about.className = "about";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "About Us"; 

    about.appendChild(title);

    return about;
}

export default createAbout;