var isPlaying = false;
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');

function toggleMusic() {
    if (!isPlaying) {
        // Play winding sound first
        windingSound.play();
        windingSound.onended = function() {
            // Only start playing the music box audio after winding sound ends
            musicBoxAudio.play();
            document.getElementById('musicBoxImage').classList.add('swinging');
            isPlaying = true;
        };
    } else {
        // If music is already playing, stop and reset the music
        musicBoxAudio.pause();
        musicBoxAudio.currentTime = 0; // Reset music to the start
        document.getElementById('musicBoxImage').classList.remove('swinging');
        isPlaying = false;
    }
}