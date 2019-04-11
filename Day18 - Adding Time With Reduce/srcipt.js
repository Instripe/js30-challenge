const timeNodes = document.querySelectorAll('[data-time]');

const totalSeconds = [...timeNodes].reduce((total, node) => {
    const time = node.dataset.time;
    const [mins, secs] = time.split(':').map(parseFloat);
    total += mins * 60 + secs;
    return total;
}, 0);

let seconds = totalSeconds;
const hours = Math.floor(seconds / 3600);

seconds = seconds % 3600;
const minutes = Math.floor(seconds / 60);

seconds = seconds % 60;

console.log(hours, minutes, seconds);
console.log(totalSeconds);