//implement menu

let game = document.getElementById('main');
game.classList.add("gameBoard");

let button = document.createElement('button');
game.appendChild(button);
button.id = 'start';

let buttonInstru = document.createElement('button');
game.appendChild(buttonInstru);
buttonInstru.id = 'instruction';

let textBtn = document.createTextNode('Start game');
button.appendChild(textBtn);

let textBtnInstru = document.createTextNode('Instruction');
buttonInstru.appendChild(textBtnInstru);

// let ring1 = document.getElementById('ring1')
// let ring2 = document.getElementById('ring2')
// let ring3 = document.getElementById('ring3')


let sonic = document.getElementById('sonic');
let kirby = document.getElementById('kirby');
let exclamation = document.getElementById('exclamation');
let audioStart = new Audio('signal.mp3');
let displaySeconds = document.getElementById('displaySeconds');
let audioRing = new Audio('prize.mp3')
let p1Score = 0
let p2Score = 0
let gameOver = false;
let winningScore = 3;





button.addEventListener('click', startGame);

function startGame() {
    game.removeChild(button);
    game.removeChild(buttonInstru);
    sonic.classList.toggle('sonic-style-on');
    kirby.classList.toggle('kirby-style-on');
    button.removeEventListener('click', startGame)
    startCountDown()

}

function startCountDown() {
    let countdownValue = 3;
    const countdownInterval = setInterval(function () {
        countdownValue--;
        displaySeconds.innerText = countdownValue;
        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            audioStart.play();
            displaySeconds.classList.toggle("displaySecondOff")
            // game.removeChild(displaySeconds);
            // game.removeChild(exclamation);
            action()
        };
    }, 1000);
};


function action(){
game.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        audioRing.play();

        if (p1Score === winningScore) {
            gameOver = true;
            console.log(gameOver)
            displaySeconds.classList.toggle('countdown')
            displaySeconds.innerText = "Winner";
            exclamation.classList.toggle('exclamation');
        }
    }
})
};











game.style.width = "100vw";
game.style.height = "100vh";
game.style.display = "Flex";
game.style.justifyContent = "Center";
game.style.alignItems = "Center";
game.style.flexDirection = "column"

button.style.padding = "10px 30px";
button.style.border = "3px solid lightgray"
button.style.backgroundColor = "black"
button.style.color = "white"
button.style.marginBottom = "15px"

buttonInstru.style.padding = "10px 30px";
buttonInstru.style.border = "3px solid lightgray"
buttonInstru.style.backgroundColor = "black"
buttonInstru.style.color = "white"