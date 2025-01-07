
const playButtons = document.querySelectorAll('.play');
const pauseButtons = document.querySelectorAll('.pause');
const stopButtons = document.querySelectorAll('.stop');


playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-audio');
        const audioElement = document.getElementById(audioId);

      
        document.querySelectorAll('audio').forEach(audio => {
            if (audio !== audioElement) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        audioElement.play();
    });
});


pauseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-audio');
        const audioElement = document.getElementById(audioId);

        audioElement.pause();
    });
});


stopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-audio');
        const audioElement = document.getElementById(audioId);

        audioElement.pause();
        audioElement.currentTime = 0;
    });
});
