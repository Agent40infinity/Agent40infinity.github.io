function Rendered(duration) {
    OnImagesLoaded(duration);
}

function Loaded(duration) {
    $('.pre-loader').fadeOut(duration);
}

function Unloaded(duration) {
    $('.pre-loader').fadeIn(duration);
}

function OnImagesLoaded(duration) {
    var images = document.getElementsByTagName("img");
    var loaded = images.length;
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loaded--;
        }
        else {
            images[i].addEventListener("load", function () {
                loaded--;
                if (loaded <= 0) {
                    Loaded(duration);
                }
            });
        }
    }
    if (loaded <= 0) {
        Loaded(duration);
    }
}