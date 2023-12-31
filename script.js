// Define global variables for audio elements and playback state
var musicBoxAudio = document.getElementById('musicBoxAudio');
var windingSound = document.getElementById('windingSound');
var isPlaying = false;

// Function to handle the music playback
function toggleMusic() {
    if (!isPlaying) {
        windingSound.play();
        windingSound.onended = function() {
            musicBoxAudio.play();
            document.getElementById('musicBoxImage').classList.add('swinging');
            isPlaying = true;
        };
    } else {
        musicBoxAudio.pause();
        musicBoxAudio.currentTime = 0;
        document.getElementById('musicBoxImage').classList.remove('swinging');
        isPlaying = false;
    }
}   }
}