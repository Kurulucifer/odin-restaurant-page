import "./stylesheet.css"
import createHome from "./home.js";

const content = document.getElementById("content");

const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const aboutTab = document.getElementById("aboutTab");
const contactTab = document.getElementById("contactTab");

const empty = document.createElement("div");
empty.textContent = "empty div";

const home = createHome();

function swapContent(newContent) {
    content.removeChild(content.firstChild);
    content.appendChild(newContent);
}

homeTab.addEventListener("click", () => {
    swapContent(home);
})

menuTab.addEventListener("click", () => {
    swapContent(empty);
})

aboutTab.addEventListener("click", () => {
    swapContent(empty);
})

contactTab.addEventListener("click", () => {
    swapContent(empty);
})