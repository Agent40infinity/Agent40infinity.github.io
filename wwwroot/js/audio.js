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

    updateProgress();
}

function togglePlay() {
    if (visited == "true" && masterAudio.paused) {
        playAudio();
    }

    masterAudio.volume = lastVolume;
    masterAudio.muted = false;

    updateProgress();
}

function playAudio() {
    masterAudio.play();
    masterAudio.loop = true;

    masterAudio.volume = lastVolume;
}

// Updates the volume of the audio using the slider after calculating the correct conversion.
function updateProgress() {
    value = document.getElementById("slider-value");
    value.innerHTML = masterAudio.volume * dBConversion;
    slider = document.getElementById("slider");
    slider.value = masterAudio.volume * dBConversion;

    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
}