import splashImage from "./images/The_Krusty_Krab.png"

function createHome() {
    const home = document.createElement("div");
    home.className = "home";
    
    const splash = document.createElement("img");
    splash.src = splashImage;
    splash.height = "500";
    splash.width = "750";
    splash.alt = "The Krusty Krab";

    const header = document.createElement("h1");
    header.textContent = "The Krusty Krab";
    
    const bodyText = document.createElement("div");
    bodyText.textContent = "The Krusty Krab is world-renowned Michelin 3-star restaurant operating just off the coast of Santa Monica Pier.";

    home.appendChild(splash)
    home.appendChild(header);
    home.appendChild(bodyText);

    return home;
}

export default createHome;