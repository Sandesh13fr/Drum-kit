window.addEventListener("keydown", function(e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

});

document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('transitionend', function(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});

