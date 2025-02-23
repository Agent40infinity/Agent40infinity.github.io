var masterAudio = new Audio('Resources/Media/landing.mp3');
var dBConversion = 250;
var lastVolume = 0;

// Used to toggle the audio.
function toggleMute(img) {
    if (masterAudio.muted) {
        if (visited == "true" && masterAudio.paused) {
            playAudio();
        }

        masterAudio.muted = false;
        lastAudio(true);
        img.src = "../Resources/SVGs/Speaker_Icon.svg";
    }
    else {
        masterAudio.muted = true;
        lastAudio(false);
        img.src = "../Resources/SVGs/Mute_Icon.svg";
    }

    localStorage.setItem("Muted", masterAudio.muted);

    updateProgress();
}

function playAudio() {
    masterAudio.play();
    masterAudio.loop = true;
}

function DefaultAudio() {
    var mute = $('.muteToggle').first();
    toggleMute(mute);
    mute.attr("src", "../Resources/SVGs/Mute_Icon.svg");
}

// Marks the last known audio value so that when muting and unmuting, it returns to the original value.
function lastAudio(toggle) {
    switch (toggle) {
        case true:
            masterAudio.volume = lastVolume;
            break;
        case false:
            lastVolume = masterAudio.volume;
            masterAudio.volume = 0;
            break;
    }

    value = document.getElementById("slider-value");
    value.innerHTML = masterAudio.volume * dBConversion;
    slider = document.getElementById("slider");
    slider.value = masterAudio.volume * dBConversion;
}

// Updates the volume of the audio using the slider after calculating the correct conversion.
function updateProgress() {
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
}