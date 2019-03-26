/*jshint esversion: 6 */
const keys = document.querySelectorAll('.key');

function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio || !key) return; // Terminates if a wrong key is pressed
  audio.currentTime = 0; // Rewind audio to the start
  audio.play();
  key.classList.add("playing");
  // If we want to finish the transition on audio end
  //audio.onended = () => key.classList.remove("playing");
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Event fired on CSS transition end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
