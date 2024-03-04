function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function init() {
    // Add event listeners for keyboard input
    window.addEventListener('keydown', function(e) {
        playSound(e.keyCode);
    });

    // Add event listeners for mouse clicks on each key
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('click', function() {
            const keyCode = this.getAttribute('data-key');
            playSound(keyCode);
        });
        key.addEventListener('transitionend', removeTransition);
    });
}

init();
