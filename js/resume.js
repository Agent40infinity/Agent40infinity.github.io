$(document).ready(function() {
    loadData();
});

async function loadData() {
    try {
        const response = await fetch('../js/Json/resume.json');
        const data = await response.json();

        loadSkill(data.language, "language-inject.inject-data");
        loadCategory(data.software, "software-inject.inject-data");
        loadLegend(data.legend, "legend-inject.inject-data");
        loadExperience(data.experience, "experience-inject.inject-data");
        loadEducation(data.education, "education-inject.inject-data");
    } catch (error) {
        console.log(error);
    }
}

function loadExperience(database, type) {
    var fullInject = "";
    for (let i = 0; i < database.length; i++) {
        var injectList = replaceChar(database[i].name) + "-inject";

        var inject = 
        '<div class="project-skill-box">' + 
            '<div class="sub-box">' +
                '<img class="sub-icon svg" src="' + database[i].icon + '" alt="field">' +
                '<p class="sub-title">' + database[i].name + '</p>' + 
            '</div>' +
            '<div class="project-skill-bar ' + injectList + ' inject-data">' +
                loadList(database[i].list) +
            '</div>' +
        '</div>';

        fullInject += inject;
    }

    $('.' + type).append(
        fullInject
    );
}

function loadList(database) {
    var inject = "";

    for (let i = 0; i < database.length; i++) {
        var logo = "";
        if (database[i].logo != "") {
            logo = '<img class="bar-pfp" src="' + database[i].logo + '" alt="logo">' +
            '<hr class="vertical">';
        }

        var internal = 0;
        var details = database[i].columns ? '<div class="info-description-columns">' : '<div class="info-description">';
        details += '<div class="description-item">';

        for (let j = 0; j < database[i].details.length; j++) {
            details += '<p class="description-entry">- ' + database[i].details[j] + '</p>';
            internal++;

            if (internal > 5) {
                details += '</div><div class="description-item">';
                internal = 0;
            }
        }
        details += '</div></div>';

        var item = 
        (database[i].selected ? '<div class="project-item selected">' : '<div class="project-item">') + 
            logo +
            '<div class=project-item-info>' + 
                '<div class="item-info-bar">' +
                    '<p class="skill-item-name">'+ database[i].project + '</p>' +
                    '<p class="skill-item-location">'+ database[i].location + '</p>' +
                    '<p class="skill-item-name">'+ database[i].date + '</p>' +
                '</div>' +
                '<hr class="horizontal">' +
                '<div class="item-info-description">' +
                    '<p class="description-text">' + database[i].description + '</p>' +
                    details +
                '</div>' +
            '</div>' +
        '</div>';
        inject += item;
    }

    return inject;
}

function loadEducation(database, type) {
    var inject = '<div class="education-box">';

    for (let i = 0; i < database.length; i++) {
        inject +=
        '<div class="project-item education-item">' + 
            '<div class=project-item-info>' + 
                '<div class="item-info-bar">' +
                    '<p class="skill-item-name">'+ database[i].degree + '</p>' +
                    '<p class="skill-item-location">'+ database[i].date + '</p>' +
                    '<p class="skill-item-name">'+ database[i].institute + '</p>' +
                '</div>' +
                '<hr class="horizontal">' +
                '<div class="item-info-description">' +
                    '<p class="description-text">' + database[i].location + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    inject += '</div>';

    $('.' + type).append(
        inject
    );
}