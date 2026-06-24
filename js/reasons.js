const reasons = [

"You're short, sweet, and adorable without even trying 🥰",
"Your warmth feels like home on difficult days ☀️",
"You don't just hear me—you truly listen 🎧✨",
"It's scary how often our preferences match 😄",
"The little thoughtful things you do never go unnoticed 🌹",
"You care in ways that make ordinary days feel special 🌸",

"I love how we can discuss almost anything openly and honestly ✨",
"When I hesitate, you often find the courage to take the first step 🤍",
"You became my safe place without even trying ❤️",
"From day one, you never felt like a stranger to me ✨",

"You trusted me with both your smiles and your tears 🥺",
"Being with you feels effortless, natural, and peaceful 🌷",

"Half the time you're already understanding what I'm trying to say 🤭",
"Our connection feels genuine, and that's my favorite thing about us ❤️",


"No matter how angry you get, your heart always finds its way back to me ❤️",
"Sometimes a single look from you says more than a thousand words 👀❤️",
"You make every ordinary moment worth remembering 📸❤️",
"There's something special about how simple yet unforgettable you are 🌹",

"I love that you share your world with me, little by little ❤️",
"I still can't believe how comfortable talking to you feels 😊",

"You're much stronger than you realize 💪❤️",

"Every version of you is cute—happy, angry, shy, excited, or dramatic 😝❤️",

"There will never be another Monika, and that's what makes you priceless 💎",
"You sacrificed sleep just to spend more time talking to me 🌙",
"And most importantly... you're my Nanna ❤️🥹"

];

function loadReasons(){

    const container =
    document.getElementById("reasonsContainer");

    if(!container) return;

    container.innerHTML = "";

    reasons.forEach((reason,index)=>{

        const card =
        document.createElement("div");

        card.className = "reason-card";

        card.innerHTML =
        `🌟 ${reason}`;

        card.style.animationDelay =
        `${index * 1500}ms`;

        container.appendChild(card);

    });

}