// Define global variables for audio elements and playback state
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');
var isPlaying = false;

// Function to handle the music playback
function toggleMusic() {
    if (!isPlaying) {
        // Play winding sound first
        windingSound.play();

        // When winding sound ends, play the music box audio
        windingSound.onended = function() {
            musicBoxAudio.play();
            isPlaying = true;
        };
    } else {
        // If music is already playing, stop and reset the music
        musicBoxAudio.pause();
        musicBoxAudio.currentTime = 0; // Reset music to the start
        isPlaying = false;
    }
}