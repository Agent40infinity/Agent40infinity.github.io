//Systems
var loadState = { FirstTime: 1, Default: 2, Information: 3 };
var portfolioState = loadState.FirstTime;
var visited = localStorage.getItem("Visited");

if (visited == "true") 
{
    portfolioState = loadState.Default 
}

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function() 
{
    switch (portfolioState)
    {
        case loadState.Default:
            $('.banner').css({"display": "none"});
            AddContents();
            break;
    }

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
});

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