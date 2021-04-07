    const buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            const wave = document.createElement('span'),
                waveOffset = this.getBoundingClientRect();
            console.log(waveOffset);

            const waveY = e.pageY - waveOffset.top,
                waveX = e.pageX - waveOffset.left;

            wave.style.top = waveY + 'px',
                wave.style.left = waveX + 'px',
                wave.style.background = this.getAttribute('data-button-background');

            this.appendChild(wave);

            setTimeout(function() {
                wave.parentNode.removeChild(wave);
            }, 1500);
        });
    }