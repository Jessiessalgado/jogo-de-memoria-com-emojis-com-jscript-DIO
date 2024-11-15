// emojis
const emojis = [
    "😍", "😍", "😂", "😂", "😘", "😘", "😎", "😎",
    "😜", "😜", "😉", "😉", "😨", "😨", "🤪", "🤪"
];
let openCards = [];

// organizando os emojis em caixas.
let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// comportamento dos cards
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);  // Adiciona a carta aberta ao array
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Criando a condição de vitória
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; // Limpa o array após a verificação

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!");
    }
}