const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let previousHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const randomIdx = Math.floor(Math.random() * holes.length);
    const hole = holes[randomIdx];
    if (hole === previousHole) return randomHole(holes);
    previousHole = hole;
    return hole;
}

function showMole() {
    // Milliseconds
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) showMole();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    holes.forEach(hole => hole.classList.remove('up'));

    showMole();
    setTimeout(() => timeUp = true, 1000 * 10);
}

function hitMole(event) {
    // Fake click
    if (!event.isTrusted) return;

    score++;
    // Hole
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', hitMole));