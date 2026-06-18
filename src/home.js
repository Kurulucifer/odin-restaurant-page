import splash from "./images/The_Krusty_Krab.png"
import interior from "./images/Krusty_Krab_In.png";
import burger from "./images/Krabby_Patty_Splash.png"
import crew from "./images/Krusty_Crew.png"

function createHome() {
    const home = document.createElement("div");
    home.className = "home";

    const title = document.createElement("div");
    title.className = "home-title";
    title.textContent = "The Krusty Krab";
    
    const splashImg = document.createElement("img");
    splashImg.className = "home-image";
    splashImg.src = splash;
    splashImg.height = "500";
    splashImg.width = "750";
    splashImg.alt = "An image of the Krusty Krab";
    
    const introText = document.createElement("div");
    introText.className = "home-text";
    introText.textContent = "The Krusty Krab is nation-renowned Michelin 3-star restaurant operating just off the coast of Santa Monica Pier.";

    const interiorImg = document.createElement("img");
    interiorImg.className = "home-image";
    interiorImg.src = interior;
    interiorImg.alt = "An image of the interior of the Krusty Krab."
    interiorImg.height = "500";
    interiorImg.width = "750";

    const midText = document.createElement("div");
    midText.className = "home-text";
    midText.textContent = "As the world's only source of the illustrious Krabby Patty, the Krusty Krab strives to further the culinary art of burger making."

    const burgerImg = document.createElement("img");
    burgerImg.className = "home-image";
    burgerImg.src = burger;
    burgerImg.alt = "An image of the renowned original Krabby Patty."
    burgerImg.height = "500";
    burgerImg.width = "750";

    const bottomText = document.createElement("div");
    bottomText.className = "home-text";
    bottomText.textContent = "We hope you come visit!"

    const crewImg = document.createElement("img");
    crewImg.className = "home-image";
    crewImg.src = crew;
    crewImg.alt = "An image of the renowned original Krabby Patty."
    crewImg.height = "500";
    crewImg.width = "750";

    home.appendChild(title);
    home.appendChild(splashImg)
    home.appendChild(introText);
    home.appendChild(interiorImg);
    home.appendChild(midText);
    home.appendChild(burgerImg);
    home.appendChild(bottomText);
    home.appendChild(crewImg);



    return home;
}

export default createHome;