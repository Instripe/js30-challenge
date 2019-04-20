const triggers = document.querySelectorAll('ul.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(params) {
    this.classList.add('trigger-enter');
    // Timeout, because first we display the block and AFTER that we
    // transition the opacity
    setTimeout(() => this.classList.contains('trigger-enter') && 
        this.classList.add('trigger-enter-active'), 150);

    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    // We get the coors that are absolute (from the viewport)
    const dropdownCoords = dropdown.getBoundingClientRect();
    // Later when we set the 'background' coords, we set them relatively
    // (from the top of the parent)
    const navCoords = nav.getBoundingClientRect();
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(params) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));