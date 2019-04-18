const divOne = document.querySelector('div.one');

function logText(e) {
    console.log(e.target.classList.value);
}

divOne.addEventListener('click', logText, {
    once: true
});

//  "once" is same as running ".removeEventListener" after the first event capture;