var audio = new Audio('Resources/landing.mp3');
var animateFrom = 200;

const database = [
    {
        title: "Dark Light",
        description: "Dark Light is dark fantasy 2D metroidvania indie development Project that takes heavily inspiration from Hollow Knight and the Soulsbourne Series.",
    },
    {
        title: "Bright",
        description: "Bright is a top down, 2D horror dungeon crawler",
    },
];

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function() 
{
    $(".enter").one("click", function () {
        //audio.play();
        //audio.volume = 0.4;

        $('.hidden').not('hr').animate({opacity: 1}, 3000);
        $('hr.hidden').animate({width: '40%', opacity: 1}, 2000);
        $('.enter').animate({opacity: 0}, 1000);

        setTimeout(function() {
            $('.banner').fadeOut(1000);

            setTimeout(function() {
                $('header').animate({width: '100%', opacity: 1}, 2000);
                $('.muteToggle').fadeIn(2000);
                $('.background').animate({top: "505px"}, 1000);
                $('.enter').fadeOut(0);
                $('.define').animate({opacity: 1}, 2000);
                    
                setTimeout(function() {
                    $('.special').fadeIn(1000);
                    $('.information').fadeIn(2000);
                    $('footer').fadeIn(2000);
                    $('body').css("overflow-y" , "visible");
                }, 4000);
            }, 1000);
        }, 3500);
    });

    for (var i = 0; i < database.length; i++)
    {
        var inject = '<div class="project-item">' + 
                     '<p>' + database[i].title + '</p>' +
                     '<p>' + database[i].description + '</p>' 
                     + '</div>';

        $('.professional-work.inject-data').append(
            inject
        );
    }

    $(window).scroll(function() {
        var screenTop = $(window).scrollTop();

        if (screenTop >= animateFrom) { 
            $('.return').fadeIn(200);
        } 
        else {    
            $('.return').fadeOut(200);
        }
    });

    $(".arrow").on("click", function() {
        element = 0;
        scrollElement = "";

        if ($(this).hasClass('special')) {
            element = "1";  
        }
        else
        {
            scrollElement = $(this).parent().attr('id');
            element = parseInt(scrollElement.replace(/[^0-9]/g, '')) + 1; 
            console.log(element);
        }

        $([document.documentElement, document.body]).animate({scrollTop: $("#chapter" + element).offset().top - 125}, 1000);
        console.log("#" + element);
    });

    $(".comments").on("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

function toggleMute(img) {
    if (audio.muted)  {
        audio.muted = false;
        img.src="Resources/SVGs/Speaker_Icon.svg";
    }
    else {
        audio.muted = true;
        img.src="Resources/SVGs/Mute_Icon.svg";
    }
}

function returnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}