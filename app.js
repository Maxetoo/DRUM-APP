window.addEventListener('load', function() {
    const sounds = document.querySelectorAll('.sound');
    const pad = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.music-cont');
    const colors = [
        'blueviolet',
        'green',
        'yellow',
        'red',
        'lightblue',
        'orangered'
    ];

    pad.forEach(function(item, index) {
        item.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            console.log(index);

            createBubbles(index);
        })
    });

    const createBubbles = (index) => {
        const bubbles = document.createElement('div');
        bubbles.classList.add('name');
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 1s ease';
        bubbles.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }
})