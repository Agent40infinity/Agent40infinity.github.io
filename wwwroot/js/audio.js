var masterAudio = new Audio('Resources/Media/landing.mp3');

function SetVolume(volume, muted) {
    if (visited == "true" && masterAudio.paused) {
        masterAudio.play();
        masterAudio.loop = true;
    }

    masterAudio.volume = volume;
    masterAudio.muted = muted;
}