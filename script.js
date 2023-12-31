var isPlaying = false;
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');

function toggleMusic() {
    var musicBoxImg = document.getElementById('musicBoxImage');

    if (!isPlaying) {
        windingSound.play();
        windingSound.onended = function() {
            musicBoxAudio.play();
            musicBoxImg.classList.add('enlargingAndRotating');
            isPlaying = true;
        };
    } else {
        musicBoxAudio.pause();
        musicBoxAudio.currentTime = 0;
        musicBoxImg.classList.remove('enlargingAndRotating');
        isPlaying = false;
    }
}