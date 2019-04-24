let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);
    const now = Date.now();
    const end = now + seconds * 1000;
    displayEndTime(end);
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(milliseconds) {
    const end = new Date(milliseconds);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    timer(parseInt(this.dataset.time));
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const seconds = Number(this.minutes.value) * 60;
    if (seconds) {
        timer(seconds);
    }
    this.reset();
});