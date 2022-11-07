import data from './database.json' assert {type: 'json'};

$(document).ready(function() {
    loadData(data.professional, "professional");
    loadData(data.personal, "personal");
});

function loadData(database, type) {
    console.log(database);
    for (let i = 0; i < database.length; i++)
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
