var masterAudio = new Audio('Resources/Media/landing.mp3');
var dBConversion = 250;
var lastVolume = 0;

$(document).ready(function () {
    masterAudio.volume = 0;
    lastVolume = 0.4;
});

// Used to toggle the audio.
function toggleMute() {
    masterAudio.muted = true;

    lastVolume = masterAudio.volume;
    masterAudio.volume = 0;
}

function togglePlay() {
    if (visited == "true" && masterAudio.paused) {
        masterAudio.play();
        masterAudio.loop = true;
    }

    masterAudio.volume = lastVolume;
    masterAudio.muted = false;

    updateProgress();
}

function SetVolume(volume) {
    masterAudio.volume = volume;
}