

const width = document.getElementsByTagName('body')[0].clientWidth;
const height = document.getElementsByTagName('body')[0].clientHeight;
const div = document.getElementById('btn-z');

document.getElementById("mainBtn").addEventListener("click", populate);
document.getElementById("mainBtn").onclick = function () {
    this.disabled = true;
};

function populate() {
    for (let i = 1; i <= 20; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const btn = `<button id="btn-${i}" style=" left:${x}px; top:${y}px" class="game-btn">More of me</button>`;
        div.insertAdjacentHTML('beforeend', btn);
        document.getElementById(`btn-${i}`).addEventListener("click", switchColor);

    }
};

function switchColor(event) {
    const bouttonId = event.target.id;
    document.getElementById(bouttonId).classList.toggle('changeColor');
};





