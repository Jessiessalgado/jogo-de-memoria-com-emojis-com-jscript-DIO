// emojis
const emojis = [
    "😍",
    "😍",
    "😂",
    "😂",
    "😘",
    "😘",
    "😎",
    "😎",
    "😜",
    "😜",
    "😉",
    "😉",
    "😨",
    "😨",
    "🤪",
    "🤪"
];
let openCards = [];

// organizando os emojis em caixas.
let shuffleEmojis = emojis.sort(() => Math.random() - 0.5 ? 2 : -1);
for(let i=0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// comportamento dos cards
function handleClick(){
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}
function checkMatch(){}

