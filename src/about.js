import krabsImg from "./images/Eugene_Krabs.png";
import squidwardImg from "./images/Squidward_Tentacles.png";
import spongebobImg from "./images/Spongebob_Squarepants.png";

function createAbout() {

    const about = document.createElement("div");
    about.className = "about";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "About Us"; 

    const founder = document.createElement("div");
    founder.className = "founder";
    const founderImg = document.createElement("img");
    founderImg.src = krabsImg;
    founderImg.alt = "A picture of Eugene Krabs, owner and founder.";
    const founderName = document.createElement("h1");
    founderName.textContent = "Eugene Harold Krabs";
    const founderDesc = document.createElement("div");
    founderDesc.textContent = "Eugene Harold Krabs, most widely known as Mr. Krabs, is owner and founder of the Krusty Krab. He invented the legendary Krabby Patty that is beloved by all residents of Bikini Bottom. A former Navy cadet, Mr. Krabs renovated a retirement home into the premier culinary institution that is the Krusty Krab today. He has one daughter, Pearl Krabs."
    founder.appendChild(founderImg);
    founder.appendChild(founderName);
    founder.appendChild(founderDesc);

    const workerItems = document.createElement("div");
    workerItems.className = "worker-items";

    const squidward = createWorkerItem(
        "Squidward Tentacles",
        "Squidward Tentacles is the sole cashier of the Krusty Krabs, efficiently handling all orders call-in or walk-in. Don't let his attitude fool you; he strives to complete every order with speed to satisfy as many customers as possible before the day's end.",
        squidwardImg,
        "A picture of Squidward Tentacles, cashier.",
    );
    squidward.className = squidward.className + " squidward";

    const spongebob = createWorkerItem(
        "Spongebob Squarepants",
        "Spongebob Squarepants is the sole fry cook, or well, sole cook, of the Krusty Krabs. He is responsible for all meals coming out of the kitchen, and is responsible for all the customers' satisfied smiles.",
        spongebobImg,
        "A picture of Spongebob Squarepants, fry cook.",
    );
    spongebob.className = spongebob.className + " spongebob"

    workerItems.appendChild(squidward);
    workerItems.appendChild(spongebob);


    about.appendChild(title);
    about.appendChild(founder);
    about.appendChild(workerItems);

    return about;
}

function createWorkerItem(name, desc, img, alt) {

    const worker = document.createElement("div");
    worker.className = "worker-item";
    const workerImg = document.createElement("img");
    workerImg.src = img;
    workerImg.alt = alt;
    const workerName = document.createElement("h2");
    workerName.textContent = name;
    const workerDesc = document.createElement("div");
    workerDesc.textContent = desc;

    const workerText = document.createElement("div");
    workerText.appendChild(workerName);
    workerText.appendChild(workerDesc);
    
    worker.appendChild(workerImg);
    worker.appendChild(workerText);

    return worker;
}

export default createAbout;