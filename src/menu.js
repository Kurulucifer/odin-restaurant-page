import img1 from "./images/Krabby_Patty.png";
import img2 from "./images/Deluxe_Krabby_Patty.png";
import img3 from "./images/Double_Triple_Bossy_Patty.png";
import img4 from "./images/Krusty_Dog.png";
import img5 from "./images/Krusty_Krab_Pizza.png";

function createMenu() {
    const imgSize = "175";

    const menu = document.createElement("div");
    menu.className = "menu";

    const row1 = document.createElement("div");
    row1.className = "menu-row";
    const row1Img = document.createElement("img");
    row1Img.src = img1;
    row1Img.height = imgSize;
    row1Img.width = imgSize;
    const row1Name = document.createElement("h2");
    row1Name.textContent = "Krabby Patty";
    const row1Desc = document.createElement("div");
    row1Desc.textContent = "Our signature dish, made with only the freshest ingredients and our signature secret sauce."
    const row1Text = document.createElement("div");
    row1Text.appendChild(row1Name);
    row1Text.appendChild(row1Desc);
    row1.appendChild(row1Img);
    row1.appendChild(row1Text);

    const row2 = document.createElement("div");
    row2.className = "menu-row";
    const row2Img = document.createElement("img");
    row2Img.src = img2;
    row2Img.height = imgSize;
    row2Img.width = imgSize;
    const row2Name = document.createElement("h2");
    row2Name.textContent = "Deluxe Krabby Patty";
    const row2Desc = document.createElement("div");
    row2Desc.textContent = "Our signature dish, but with double the meat and double the satisfaction."
    const row2Text = document.createElement("div");
    row2Text.appendChild(row2Name);
    row2Text.appendChild(row2Desc);
    row2.appendChild(row2Img);
    row2.appendChild(row2Text);

    const row3 = document.createElement("div");
    row3.className = "menu-row";
    const row3Img = document.createElement("img");
    row3Img.src = img3;
    row3Img.height = imgSize;
    row3Img.width = imgSize;
    const row3Name = document.createElement("h2");
    row3Name.textContent = "Double Triple Bossy Patty";
    const row3Desc = document.createElement("div");
    row3Desc.textContent = "Our signature dish, but with double everything. Maybe not pickles, if you prefer."
    const row3Text = document.createElement("div");
    row3Text.appendChild(row3Name);
    row3Text.appendChild(row3Desc);
    row3.appendChild(row3Img);
    row3.appendChild(row3Text);

    const row4 = document.createElement("div");
    row4.className = "menu-row";
    const row4Img = document.createElement("img");
    row4Img.src = img4;
    row4Img.height = imgSize;
    row4Img.width = imgSize;
    const row4Name = document.createElement("h2");
    row4Name.textContent = "Krusty Dog";
    const row4Desc = document.createElement("div");
    row4Desc.textContent = "Our signature meat mix wrapped in a freshly made hot dog roll."
    const row4Text = document.createElement("div");
    row4Text.appendChild(row4Name);
    row4Text.appendChild(row4Desc);
    row4.appendChild(row4Img);
    row4.appendChild(row4Text);

    const row5 = document.createElement("div");
    row5.className = "menu-row";
    const row5Img = document.createElement("img");
    row5Img.src = img5;
    row5Img.height = imgSize;
    row5Img.width = imgSize;
    const row5Name = document.createElement("h2");
    row5Name.textContent = "Krusty Krab Pizza (NEW!)";
    const row5Desc = document.createElement("div");
    row5Desc.textContent = "Our signature dish, but now in a new, flatter form factor shareable with friends and family. For a limited time only, extra toppings are 1% off!"
    const row5Text = document.createElement("div");
    row5Text.appendChild(row5Name);
    row5Text.appendChild(row5Desc);
    row5.appendChild(row5Img);
    row5.appendChild(row5Text);

    menu.appendChild(row1);
    menu.appendChild(row2);
    menu.appendChild(row3);
    menu.appendChild(row4);
    menu.appendChild(row5);


    return menu;
}

export default createMenu;