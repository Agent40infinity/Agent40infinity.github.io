$(document).ready(function() {
    loadData();
});

async function loadData() {
    const response = await fetch('./resume.json');
    const data = await response.json();

    loadSkill(data.language, "language");
    loadSkill(data.software, "software");
}

function loadSkill(database, type) {
    console.log(database);
    for (let i = 0; i < database.length; i++)
    {
        var inject = 
        '<div class="skill-item">' + 
            '<p class="skill-item-name">' + database[i].title + '</p>' +
            '<img class="skill-item-icon svg" src="' + database[i].level + '"></img>' +
        '</div>';

        $('.' + type + '-inject.inject-data').append(
            inject
        );
        console.log(inject);
    }
}