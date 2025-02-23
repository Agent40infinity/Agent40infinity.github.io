//Systems
var loadState = { FirstTime: 1, Default: 2, Information: 3 };
var portfolioState = loadState.FirstTime;
var visited = localStorage.getItem("Visited");

if (visited == "true") 
{
    portfolioState = loadState.Default 
}

// Menu
var menuToggle = false;
var topAnimateDist = 200;
var headerAnimateDist = 400;

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function() 
{
    switch (portfolioState)
    {
        case loadState.FirstTime:
            FirstTimeLoad();
            break;
        case loadState.Default:
            $('.banner').css({"display": "none"});
            AddContents();
            DefaultAudio();
            break;
    }

    // Animates the header once too far down.
    // Makes the header / navigation banner transparent.
    $(window).scroll(function () {
        var screenTop = $(window).scrollTop();

        if (screenTop >= headerAnimateDist)
        {
            $('header').css({"background-color": "rgba(0, 0, 0, 0.7)", "transition": "0.5s"});
        }
        else
        {
            $('header').css({"background-color": "rgba(0, 0, 0, 1)", "transition": "0.5s"});
        }
    });

    // I can't remember what this does for the life of me.
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

    // Clicking on the comments icon will scroll you down to the 'Contact Me' footer.
    $(".comments").on("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

function FirstTimeLoad()
{
    $(".enter").one("click", function () {
        playAudio();

        $('.hidden').not('hr').animate({opacity: 1}, 3000);
        $('hr.hidden').animate({width: '40%', opacity: 1}, 2000);
        $('.enter').animate({opacity: 0}, 1000);

        setTimeout(function() {
            $('.banner').fadeOut(1000);

            setTimeout(function() {
                AddContents();
                localStorage.setItem("Visited", true);
            }, 1000);
        }, 3500);
    });
}

function AddContents()
{
    $('header').animate({width: '100%', opacity: 1}, 2000);
    $('.volume-container').fadeIn(2000);
    $('.volume-container').css({display: "flex"});
    $('.background').animate({top: "505px"}, 1000);
    $('.enter').fadeOut(0);
    $('.define').animate({opacity: 1}, 2000);

    setTimeout(function() {
        $('.special').fadeIn(1000);
        $('.information').fadeIn(2000);
        $('footer').fadeIn(2000);
        $('body').css("overflow-y" , "visible");
    }, 200);
}

// Utilises the arrows to auto scroll to x chapter.
function scrollChapter(chapter) {
    $([document.documentElement, document.body]).animate({scrollTop: $("#chapter" + chapter).offset().top - 125}, 1000);
}

// Toggles the menu.
function toggleMenu() {
    switch (menuToggle)
    {
        case false:
            document.getElementById("ham-nav").style.width="600px";
            menuToggle = true;
            break;
        case true:
            document.getElementById("ham-nav").style.width="0px";
            menuToggle = false;
            break;
    }
}