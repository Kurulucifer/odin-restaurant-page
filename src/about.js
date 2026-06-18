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
    founderDesc.textContent = "hi I'm mr. krabs!!!"
    founder.appendChild(founderImg);
    founder.appendChild(founderName);
    founder.appendChild(founderDesc);

    const workerItems = document.createElement("div");
    workerItems.className = "worker-items";

    const squidward = createWorkerItem(
        "Squidward Tentacles",
        "hi I'm squidward!!!",
        squidwardImg,
        "A picture of Squidward Tentacles, cashier.",
    )
    squidward.className = squidward.className + " squidward";

    const spongebob = createWorkerItem(
        "Spongebob Squarepants",
        "hi I'm spongebob!!!",
        spongebobImg,
        "A picture of Spongebob Squarepants, fry cook.",
    )
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

// <!-- <div class="founder">
//       <img src="./images/Eugene_Krabs.png" alt="A picture of Eugene Krabs, owner and founder.">
//       <h1>Eugene Harold Krabs</h1>
//       <div>hi I'm mr krabs!!!</div>
//     </div>
//     <div class="worker-items">
//       <div class="worker-item squidward">
//         <img src="./images/Squidward_Tentacles.png" alt="A picture of Squidward Tentacles, cashier.">
//         <div>
//           <h1>Squidward Tentacles</h1>
//           <div>hi I'm squidward!!!</div>
//         </div>
//       </div>
//       <div class="worker-item spongebob">
//         <img src="./images/Spongebob_Squarepants.png" alt="A picture of Spongebob Squarepants, fry cook.">
//         <div>
//           <h1>Spongebob Squarepants</h1>
//           <div>hi spongebob!!!</div>
//         </div>
//       </div>
//     </div> -->