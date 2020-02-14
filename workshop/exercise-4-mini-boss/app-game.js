
const minBtn = 5;
const maxBtn = 11;
const appContainer = document.getElementById('app');
const width = document.getElementsByTagName('body')[0].clientWidth;
const height = document.getElementsByTagName('body')[0].clientHeight;
const displaySeconds = document.getElementById('displaySeconds');
const win = document.getElementsByClassName('game-btn');
const result = document.getElementById('result');
const audioLose = new Audio('khaled_theydontwant.mp3');
const audioWin = new Audio('flava_1.mp3');
let remainmingBtn;
let countdownInterval;

appContainer.innerHTML = `<button id="start-btn" class="start-btn">Let's multiply</button>`;
const button = document.getElementById('start-btn');

button.addEventListener("click", game);

function game() {
    appContainer.removeChild(button);
    const random = Math.floor(Math.random() * (maxBtn - minBtn)) + minBtn;
    let numberBtn = random;
    remainmingBtn = random;
    for (i = 0; i < numberBtn; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const gameBtn = `<div id="game-btn${i}" style=" left:${x}px; top:${y}px" class="game-btn"></div>`;
        appContainer.insertAdjacentHTML('beforeend', gameBtn);
        document.getElementById(`game-btn${i}`).addEventListener("click", killSquirels);
    }
    startCountDown();
    button.removeEventListener("click", game);
};

function killSquirels(event) {
    const bouttonId = event.target.id;
    document.getElementById(bouttonId).classList.add('changeColor');
    remainmingBtn--;
    if (remainmingBtn === 0) {
        clearInterval(countdownInterval);
        appContainer.innerHTML = `<p class="game-result">You win !</p>`;
        result.removeChild(displaySeconds);
        audioWin.play();
    }

};

function startCountDown() {
    let countdownValue = 8;
    countdownInterval = setInterval(function () {
        countdownValue--;
        displaySeconds.innerText = countdownValue;
        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            appContainer.innerHTML = `<p class="game-result">You lose</p>`;
            result.removeChild(displaySeconds);
            audioLose.play();
        };

    }, 1000);

}


//location.reload()


