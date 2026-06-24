function createPetal(){

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (8 + Math.random()*5) + "s";

    document
        .getElementById("petal-container")
        .appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },15000);

}

function startPetals(){

    setInterval(()=>{

        createPetal();

    },700);

}

// =================================
// PETAL BURST
// =================================

function createPetalBurst(){

    for(let i=0;i<40;i++){

        const petal =
            document.createElement("div");

        petal.classList.add("petal");

        petal.style.left = "50%";
        petal.style.top = "50%";

        petal.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document
            .getElementById("petal-container")
            .appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },5000);

    }

}