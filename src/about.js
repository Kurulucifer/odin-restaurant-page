import krabsImg from "./images/Eugene_Krabs.png";
import squidwardImg from "./images/Squidward_Tentacles.png";
import spongebobImg from "./images/Spongebob_Squarepants.png";

function createAbout() {
    const imgSize = "175";

    const about = document.createElement("div");
    about.className = "about";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "About Us"; 

    const worker1 = document.createElement("div");
    const worker1Img = document.createElement("img");
    worker1Img.src = krabsImg;



    about.appendChild(title);

    return about;
}

function createWorkerItem(name, desc, img, alt) {

}

export default createAbout;