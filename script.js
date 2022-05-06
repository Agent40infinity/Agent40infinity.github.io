var audio = new Audio('Resources/landing.mp3');
var animateFrom = 200;

const professional = [
    {
        title: "Dark Light",
        image: "Resources/Database/test.jpg",
        description: "Dark Light is a 2D metroidvania inspirated by Hollow Knight and the Soulsbourne Series.",
        key: ["Velocity-based 2D physics controller", "Player state machine", "Dynamic save system using Json.NET"],
        utility: ["Unity", "C#", "ShaderCore", "Indie"],
    },
    {
        title: "Untitled Statistics Project",
        image: "Resources/Database/test.jpg",
        description: "Bright is a top down, 2D horror dungeon crawler",
        key: [""],
        utility: ["Unity", "C#", "Work-Experience", "University"],
    },
    {
        title: "Bright",
        image: "Resources/Database/test.jpg",
        description: "Bright is a top down, 2D horror dungeon crawler",
        key: ["Procedural Dungeon Generation", "Custom Dungeon Camera", "Dynamic game events", "From scratch, A* styled pathfinding"],
        utility: ["Unity", "C#", "University"],
    },
];

const personal = [
    {
        title: "Agent40",
        image: "Resources/Database/test.jpg",
        description: "Alias used for content creation, game development, gaming, and general use during my lifetime",
        key: [],
        utility: ["Youtube", "Twitch", "Content Creator"],
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

    loadData(professional, "professional");
    loadData(personal, "personal");
    

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

function loadData(database, type) {
    for (var i = 0; i < database.length; i++)
    {
        var utility = "";
        for (var k = 0; k < database[i].utility.length; k++)
        {
            utility += '<span class="project-utility-item">' + database[i].utility[k] + '</span>';
        }

        var key = "";
        if (database[i].key.length != 0)
        {
            key = "<p class=project-list-key>Notable Contributions:</p>";
            for (var j = 0; j < database[i].key.length; j++)
            {
                key += '<p class="project-list-key">- ' + database[i].key[j] + '</p>';
            }
        }

        var inject = '<div class="project-item">' + 
                        '<div class="project-header">' +
                            '<img class="project-img" src="' + database[i].image + '" alt="project-item-' + database[i].title + '-image"/>' +
                            '<p class="project-title">' + database[i].title + '</p>' +
                        '</div>' +
                        '<div class="project-utility">' +
                            utility +
                        '</div>' +
                        '<div class="project-info">' +
                            '<p class="project-description">' + database[i].description + '</p>' +
                            '<div class="project-list">' +
                                key +
                            '</div>' +
                        '</div>' +
                    '</div>';

        $('.' + type + '-work.inject-data').append(
            inject
        );
    }
}