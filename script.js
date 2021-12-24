var audio = new Audio('Resources/landing.mp3');
var animateFrom = 200;

$(document).ready(function() 
{
    $(".enter").one("click", function () {
        audio.play();
        audio.volume = 0.4;

        $('.hidden').not('hr').animate({opacity: 1}, 3000);
        $('hr.hidden').animate({width: '40%', opacity: 1}, 2000);
        $('.enter').animate({opacity: 0}, 1000);

        setTimeout(function() {
            $('.subtext').animate({opacity: 0}, 1000);
            setTimeout(function() {
                $('.subtext').replaceWith(
                    '<p class="define hidden">"A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer."</p>'
                );
                $('.enter').fadeOut(0);
                $('.special').css("display" , "inline-block");
                $('.define').animate({opacity: 1}, 2000);
                
                setTimeout(function() {
                    $('.arrow').animate({opacity: 1}, 1500);
                    $('.information').fadeIn(2000);
                }, 4000);
            }, 1000);
        }, 3500);
    });

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

        $([document.documentElement, document.body]).animate({scrollTop: $("#chapter" + element).offset().top}, 1000);
        console.log("#" + element);
    });
});

function toggleMute(img) {
    if (audio.muted)  {
        audio.muted = false;
        img.src="Resources/Speaker_Icon.svg";
    }
    else {
        audio.muted = true;
        img.src="Resources/Mute_Icon.svg";
    }
}

function returnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}