// =================================
// SCENE MANAGEMENT
// =================================

let currentScene = 0;

function goToScene(sceneNumber){

    document
    .querySelectorAll(".scene")
    .forEach(scene =>
        scene.classList.remove("active")
    );

    const targetScene =
    document.getElementById(
    `scene${sceneNumber}`
    );

    if(targetScene){

        targetScene.classList.add(
        "active"
        );

    }

    currentScene = sceneNumber;

    // Background Music Control

    const music =
    document.getElementById(
    "bgMusic"
    );

    if(music){

        if(
            sceneNumber === 5 ||
            sceneNumber === "5b"
        ){

            music.pause();

        }
        else{

            if(music.paused){

                music.play().catch(()=>{});

            }

        }

    }

    // Scene 2
    if(sceneNumber === 2){

        startConstellationText();

    }

    // Scene 3
    if(sceneNumber === 3){

        loadReasons();

    }

    // Scene 4
    if(sceneNumber === 4){

        startPetals();

    }

    // Scene 8
    if(sceneNumber === 8){

        startFinalAnimation();

    }

}

// =================================
// INTRO VIDEO EXPERIENCE
// =================================

document.addEventListener("DOMContentLoaded",()=>{

    const startBtn = document.getElementById("startVideoBtn");

    const introVideo =document.getElementById("introVideo");

    const continueBtn =document.getElementById("introContinueBtn");
    if(
        startBtn &&
        introVideo &&
        continueBtn
    ){

        startBtn.addEventListener("click",()=>{

            console.log("Button Clicked");

            document.querySelector(".intro-cover").style.display = "none";

            introVideo.style.display = "block";

            introVideo.muted = false;

            introVideo.volume = 1;

            introVideo.play()
            .then(()=>{

                console.log("Video Started");

            })
            .catch(err=>{

                console.error(err);

            });

        });

        introVideo.addEventListener(
        "timeupdate",
        ()=>{

            if(
                introVideo.duration &&
                introVideo.duration -
                introVideo.currentTime <= 2
            ){

                continueBtn.classList.remove(
                "hidden"
                );

                continueBtn.classList.add(
                "show"
                );

            }

        });

    }

});

// =================================
// START JOURNEY
// =================================

function startJourney(){

    const introVideo =
    document.getElementById(
    "introVideo"
    );

    if(introVideo){

        introVideo.pause();

    }

    const music =
    document.getElementById(
    "bgMusic"
    );

    if(music){

        music.volume = 0.22;

        music.play().catch(()=>{});

    }

    goToScene(1);

}

// =================================
// ENVELOPE OPENING
// =================================

document.addEventListener(
"DOMContentLoaded",
()=>{

    const envelope =
    document.getElementById(
    "envelope"
    );

    if(!envelope) return;

    envelope.addEventListener(
    "click",
    ()=>{

        envelope.classList.add(
        "envelope-open"
        );

        createPetalBurst();

        setTimeout(()=>{

            document
            .getElementById(
            "envelopeContainer"
            )
            .style.display =
            "none";

            document
            .querySelector(
            ".click-text"
            )
            .style.display =
            "none";

            const letter =
            document.getElementById(
            "letterContainer"
            );

            letter.style.display =
            "flex";

            letter.classList.add(
            "letter-fullscreen"
            );

            startTypingLetter();

        },1200);

    });

});

// =================================
// LETTER CONTENT
// =================================

const letterText = `
Today is your day, but somehow it feels like a celebration of all the beautiful moments that entered my life because of you.
Do you remember those early days in the PG?
The awkward "Hi" in the lift...
The silent glances during breakfast...
The moments when we both wanted to talk but didn't quite know how.

Back then, I never imagined that the girl I hesitated to greet would become the person I could talk to for hours without ever getting bored.
Then came our terrace talks.
What started as a few casual conversations somehow turned into countless evenings under the open sky. We shared stories, dreams, fears, random gossip, childhood memories, and pieces of ourselves that we rarely show to others.
Hours felt like minutes whenever I was with you.
Somewhere along the way, the distance between strangers disappeared.
You became my comfort.
My favorite conversation.
My favorite part of the day.
And what amazed me most was how naturally everything happened.
With you, I never had to pretend.
I never had to filter my thoughts.
I could simply be myself.
And for reasons I still can't fully explain, I felt a connection with you that I had never felt with anyone else before.
Then came our first movie together.
It wasn't just about the movie.
It was about spending an entire day with you and realizing how happy your presence made me.
Everything felt easy.
Everything felt right.
Deep down, I think both of us knew that what we shared was much more than an ordinary friendship.
I never found the courage to say it first.
You did.
And I will always be thankful for that.

One of the things I love most about us is how our minds seem to meet halfway.
Our thoughts align so often.
And even when they don't, we listen, discuss, understand, and grow together instead of holding onto our egos.
Even our little fights somehow bring us closer.
Every misunderstanding teaches us more about each other.
Every conversation strengthens what we have.

Monika, you are cute.
You are sweet.
You are beautiful.
But beyond all of that, you are someone who makes ordinary moments feel extraordinary.
Someone who can turn a simple terrace into my favorite place.
Someone who can make a normal day feel special just by being part of it.
I don't know what the future has planned for us.
I don't know how many chapters are still waiting to be written.
But what I do know is this:
I want to cherish every moment with you.
Every laugh.
Every conversation.
Every movie.
Every terrace talk.
Every silly argument.
Every memory we create together.
Because no matter what tomorrow brings, these moments with you will always be among the most beautiful parts of my life.
Thank you for being you.
Thank you for walking into my life.
And thank you for making it brighter than it was before.
Happy Birthday, Monika ❤️
Forever grateful for every moment with you.
`;

// =================================
// TYPEWRITER
// =================================
const midpoint =
Math.floor(letterText.length / 2);


function startTypingLetter(){

    const page1 =
    document.getElementById(
    "typedLetterPage1"
    );

    const page2 =
    document.getElementById(
    "typedLetterPage2"
    );

    if(!page1 || !page2) return;

    // Split by paragraphs
    const paragraphs =
    letterText.trim().split("\n\n");

    const splitIndex =
    Math.ceil(paragraphs.length * 0.60);

    const text1 =
    paragraphs
    .slice(0, splitIndex)
    .join("\n\n");

    const text2 =
    paragraphs
    .slice(splitIndex)
    .join("\n\n");

    page1.innerHTML = "";
    page2.innerHTML = "";

    let i = 0;

    const timer1 =
    setInterval(()=>{

        page1.innerHTML +=
        text1.charAt(i);
        page1.parentElement.scrollTo({
            top: page1.parentElement.scrollHeight,
            behavior: "smooth"
        });

        i++;

        if(i >= text1.length){

            clearInterval(timer1);

            let j = 0;

            const timer2 =
            setInterval(()=>{

                page2.innerHTML +=
                text2.charAt(j);
                page2.parentElement.scrollTo({
                    top: page2.parentElement.scrollHeight,
                    behavior: "smooth"
                });
                
                j++;

                if(j >= text2.length){

                    clearInterval(timer2);

                    document
                    .getElementById(
                    "letterNextBtn"
                    )
                    .classList.remove(
                    "hidden"
                    );

                }

            },55); // slower typing

        }

    },55); // slower typing

}
// =================================
// SHOOTING STAR WISHES
// =================================

let wishes = 0;

document.addEventListener(
"click",
(e)=>{

    if(currentScene !== 7)
    return;

    createShootingStar(
    e.clientX,
    e.clientY
    );

    wishes++;

    document
    .getElementById(
    "wishCounter"
    )
    .innerHTML =
    `Wishes: ${wishes} / 5`;

    if(wishes >= 5){

        document
        .getElementById(
        "wishMessage"
        )
        .innerHTML =
        "✨ My wish already came true ✨";

        document
        .getElementById(
        "wishNextBtn"
        )
        .classList.remove(
        "hidden"
        );

    }

});

// =================================
// SHOOTING STAR
// =================================

function createShootingStar(x,y){

    const star =
    document.createElement(
    "div"
    );

    star.classList.add(
    "shooting-star"
    );

    star.style.left =
    x + "px";

    star.style.top =
    y + "px";

    document.body
    .appendChild(star);

    star.style.animation =
    "shooting 2s linear forwards";

    setTimeout(()=>{

        star.remove();

    },2000);

}

// =================================
// CONSTELLATION TEXT
// =================================

function startConstellationText(){

    const line1 =
    document.getElementById(
    "constellationLine1"
    );

    const line2 =
    document.getElementById(
    "constellationLine2"
    );

    const button =
    document.getElementById(
    "constellationBtn"
    );

    if(!line1 || !line2)
    return;

    line1.innerHTML = "";
    line2.innerHTML = "";

    if(button){

        button.classList.add(
        "hidden"
        );

    }

    setTimeout(()=>{

        const image =
        document.getElementById(
        "constellationImage"
        );

        if(image){

            image.style.opacity =
            "0.45";

        }

    },2000);

    setTimeout(()=>{

        line1.innerHTML =
        "Among billions of stars...";

        line1.classList.add(
        "fade-in-text"
        );

    },5000);

    setTimeout(()=>{

        line2.innerHTML =
        "One shines differently.";

        line2.classList.add(
        "fade-in-text"
        );

    },8000);

    setTimeout(()=>{

        if(button){

            button.classList.remove(
            "hidden"
            );

        }

    },11000);

}

// =================================
// FINALE
// =================================

function startFinalAnimation(){

    console.log(
    "Final scene started"
    );

}
const videos = [

    "assets/video1.mp4",
    "assets/video2.mp4",
    "assets/video3.mp4",
    "assets/video4.mp4",
    "assets/video5.mp4"

];

let currentVideo = 0;

function loadVideo(index){

    const video =
    document.getElementById("birthdayVideo");

    video.src = videos[index];

    video.load();

    document.getElementById(
        "videoIndex"
    ).innerText = index + 1;

    document.querySelector(".left").disabled =
        index === 0;

    document.querySelector(".right").disabled =
        index === videos.length - 1;

}

function nextVideo(){

    if(currentVideo < videos.length - 1){

        currentVideo++;

        loadVideo(currentVideo);

    }

}

function prevVideo(){

    if(currentVideo > 0){

        currentVideo--;

        loadVideo(currentVideo);

    }

}