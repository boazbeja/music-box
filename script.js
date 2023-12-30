document.addEventListener('DOMContentLoaded', function() {
    var musicBoxAudio = document.getElementById('musicBoxAudio');
    var windingSound = document.getElementById('windingSound');
    var musicBoxImage = document.getElementById('musicBoxImage');
    var isPlaying = false;

    function toggleMusic() {
    windingSound.play();
    if (isPlaying) {
        musicBoxAudio.pause();
        musicBoxImage.classList.remove("swinging");
    } else {
        musicBoxAudio.play();
        musicBoxImage.classList.add("swinging");
    }
    isPlaying = !isPlaying;
}

    window.toggleMusic = toggleMusic; // Make the function globally accessible for the onclick event
});