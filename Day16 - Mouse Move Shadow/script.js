const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const maxRange = 100; // 100px

function shadow(event) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = event;

    // This - 'hero' element, event.target - triggered element
    if (this !== event.target) {
        x += event.target.offsetLeft;
        y += event.target.offsetTop;
    }

    const xRange = Math.round((x / width * maxRange) - (maxRange / 2));
    const yRange = Math.round((y / height * maxRange) - (maxRange / 2));
    
    text.style.textShadow = `
        ${xRange}px ${yRange}px 0 rgba(255, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);