const inputs = document.querySelectorAll('input[type="checkbox"]');
let lastCheckedInput;

function manageCheck(event) {
    // If shift is pressed and an element is checked
    if (event.shiftKey && this.checked) {
        let isInBetween = false;
        inputs.forEach(input => {
            // If input is currently checked or last checked item
            if (input === this || input === lastCheckedInput) {
                isInBetween = !isInBetween;
            }

            if (isInBetween) {
                input.checked = true;
            }
        });
    }

    lastCheckedInput = this;
}

inputs.forEach(input =>
    input.addEventListener('click', manageCheck));