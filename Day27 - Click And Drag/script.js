const slider = document.querySelector('.items');
let isClicked = false;
let startX;
let startScrollLeft;

function activateScroll(event) {
    isClicked = true;
    this.classList.add('active');
    startX = event.pageX - this.offsetLeft;
    startScrollLeft = this.scrollLeft;
}

function deactivateScroll() {
    isClicked = false;
    this.classList.remove('active');
}

function scroll(event) {
    if (!isClicked) return;
    event.preventDefault();
    const x = event.pageX - this.offsetLeft;
    const distanceScrolled = x - startX;
    this.scrollLeft = startScrollLeft - distanceScrolled;
}

slider.addEventListener('mousedown', activateScroll);
slider.addEventListener('mouseup', deactivateScroll);
slider.addEventListener('mouseleave', deactivateScroll);
slider.addEventListener('mousemove', scroll);