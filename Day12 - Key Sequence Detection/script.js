const pressed = [];
const secretCode = 'rainbow';

window.addEventListener('keyup', e => {
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    console.log(pressed);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
})