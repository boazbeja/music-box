var isPlaying = false;
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');
var musicBoxImg = document.getElementById('musicBoxImage');

musicBoxImg.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (!isPlaying) {
        windingSound.play();
        windingSound.onended = function() {
            musicBoxAudio.play();
            musicBoxImg.classList.add('continuousRotateAndScale');
            isPlaying = true;
        };
    } else {
        musicBoxAudio.pause();
        musicBoxAudio.currentTime = 0;
        musicBoxImg.classList.remove('continuousRotateAndScale');
        isPlaying = false;
    }
}