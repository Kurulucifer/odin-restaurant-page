import img1 from "./images/Krabby_Patty.png";
import img2 from "./images/Deluxe_Krabby_Patty.png";
import img3 from "./images/Double_Triple_Bossy_Patty.png";
import img4 from "./images/Krusty_Dog.png";
import img5 from "./images/Krusty_Krab_Pizza.png";

function createMenu() {
    const imgSize = "175";
    
    const menu = document.createElement("div");
    menu.className = "menu";

    // might change to a stylized title image
    // remember to do this for other tabs (except home)
    const title = document.createElement("h1"); 
    title.className = "title";
    title.textContent = "Menu";

    const row1 = createMenuItem("Deluxe Krabby Patty",
        "Our signature dish, made with only the freshest ingredients and our signature secret sauce.",
        img1,
        "A picture of a Krabby Patty.",
    )

    const row2 = createMenuItem("Krabby Patty",
        "Our signature dish, but with double the meat and double the satisfaction.",
        img2,
        "A picture of a Deluxe Krabby Patty.",
    )

    const row3 = createMenuItem("Double Triple Bossy Patty",
        "Our signature dish, but with double everything. Maybe not pickles, if you prefer.",
        img3,
        "A picture of a Double Triple Bossy Patty.",
    )

    const row4 = createMenuItem("Krusty Dog",
        "Our signature meat mix wrapped in a freshly made hot dog roll.",
        img4,
        "A picture of a Krusty Dog (a hot dog).",
    )

    const row5 = createMenuItem("Krusty Krab Pizza (NEW!)",
        "Our signature dish, but now in a new, flatter form factor shareable with friends and family. For a limited time only, extra toppings are 1% off!",
        img5,
        "A picture of the all new Krusty Krab Pizza.",
    )

    menu.appendChild(title);
    menu.appendChild(row1);
    menu.appendChild(row2);
    menu.appendChild(row3);
    menu.appendChild(row4);
    menu.appendChild(row5);


    return menu;
}

function createMenuItem(name, desc, img, alt) {
    const imgSize = "175";

    const row = document.createElement("div");
    row.className = "menu-row";
    const rowImg = document.createElement("img");
    rowImg.src = img;
    rowImg.height = imgSize;
    rowImg.width = imgSize;
    rowImg.alt = alt;
    const rowName = document.createElement("h2");
    rowName.textContent = name;
    const rowDesc = document.createElement("div");
    rowDesc.textContent = desc
    const rowText = document.createElement("div");
    rowText.appendChild(rowName);
    rowText.appendChild(rowDesc);
    row.appendChild(rowImg);
    row.appendChild(rowText);

    return row;
} 

export default createMenu;