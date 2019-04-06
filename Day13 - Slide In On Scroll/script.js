function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    const windowTopPosition = window.scrollY;
    const windowBotPosition = windowTopPosition + window.innerHeight;
    
    sliderImages.forEach(slide => {      
        const imageMiddlePosition = slide.offsetTop + slide.height / 2;
        const imageBottomPosition = slide.offsetTop + slide.height;
        // Atleast half of the image is on screen
        const isHalfShown = windowBotPosition >= imageMiddlePosition;
        // All of the image height is scrolled past
        const isScrolledPast = windowTopPosition > imageBottomPosition;

        // Image is in on screen
        if (isHalfShown && !isScrolledPast) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));