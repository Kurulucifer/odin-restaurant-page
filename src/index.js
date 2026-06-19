import "./stylesheet.css"
import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";
import createContact from "./contact.js";

const content = document.getElementById("content");

const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const aboutTab = document.getElementById("aboutTab");
const contactTab = document.getElementById("contactTab");

const home = createHome();
const menu = createMenu();
const about = createAbout();
const contact = createContact();

homeTab.addEventListener("click", () => {
    swapContent(home);
})

menuTab.addEventListener("click", () => {
    swapContent(menu);
})

aboutTab.addEventListener("click", () => {
    swapContent(about);
})

contactTab.addEventListener("click", () => {
    swapContent(contact);
})

function swapContent(newContent) {
    if (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(newContent);
}

swapContent(home);