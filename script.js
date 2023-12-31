var isPlaying = false;
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');

function toggleMusic() {
    var musicBoxImg = document.getElementById('musicBoxImage');

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