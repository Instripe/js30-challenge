const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen');
let isEditing = false;
let isScrubing = false;

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function skip(button) {
    // dataset - all 'data - ' attributes on a HTML element
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    if (!isEditing) return;
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    if (!isScrubing) return;
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', e => toggle.textContent = '❚❚');
video.addEventListener('pause', e => toggle.textContent = '▶');
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

fullscreenButton.addEventListener('click', e => video.requestFullscreen());

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate);
    range.addEventListener('mousemove', handleRangeUpdate);
    range.addEventListener('mousedown', e => isEditing = true);
    range.addEventListener('mouseup', e => isEditing = false);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', e => isScrubing = true);
progress.addEventListener('mouseup', e => isScrubing = false);