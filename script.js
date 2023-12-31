document.addEventListener('DOMContentLoaded', 
    function toggleMusic() {
    var windingSound = document.getElementById('windingSound');
    var musicBoxAudio = document.getElementById('musicBoxAudio');

    if (!isPlaying) {
        // Play winding sound first
        windingSound.play();
        
        // Once winding sound ends, play the music
        windingSound.onended = function() {
            musicBoxAudio.play();
            isPlaying = true;
        };
    } else {
        // Pause the music
        musicBoxAudio.pause();
        isPlaying = false;
    }
}