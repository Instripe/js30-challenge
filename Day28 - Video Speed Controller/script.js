const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video.flex');

function changeSpeed(event) {
    const y = event.pageY - this.offsetTop;
    const height = y / this.offsetHeight;
    const percent = `${Math.round(height * 100)}%`;
    const min = 0.5;
    const max = 4;
    const playbackRate = height * (max - min) + min;
    bar.style.height = percent;
    bar.textContent = `${playbackRate.toFixed(2)}x`;
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', changeSpeed);