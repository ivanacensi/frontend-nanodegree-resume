//Data Structure
var bio = {
    "name": "Ivan Elimbi",
    "role": "Developper",
    "welcomeMessage": "To the infinite and beyond",
    "biopic": "http://placehold.it/100x150",
    "contacts": {
        "mobile": "0611427503",
        "email": "ivan.elimbi@acensi.fr",
        "github": "ivanacensi",
        "location": "Paris",
    },
    "skills": [".NET", "Html", "CSS", "Javascript", "SQL", "NoSQL", "Software Craftmanship", "Project Management"],
};

var education = {
    schools: [{
        "name": "ECE",
        "degree": "Master",
        "dates": "2008",
        "location": "Paris",
        "majors": ["Telecomunication and Network", "Finance"],
    },
    ],
    onlineCourses: [{
        "title": "Front End Web Developper Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    ],
};

var work = {
    jobs: [{
        "employer": "Acensi",
        "title": "Junior Developper",
        "location": "Paris",
        "dates": "2008-2010",
        "description": "Junior developper for a front-office IT Team for a major Asset Manager"
    },
    {
        "employer": "Phirst Vanilla",
        "title": "Developper",
        "location": "Paris",
        "dates": "2010-2014",
        "description": "Lead developper for a front office IT team for a Asset Manager"
    },
    {
        "employer": "Acensi",
        "title": "Senior Developper",
        "location": "La Défense",
        "dates": "2014-now",
        "description": "Team Leader for a software team"
    }
    ],
};

var projects = {
    "projects": [{
        "title": "Find Data Ref",
        "dates": "2008-2009",
        "description": "GUI for querying the main Referential Instrument",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"],
    },
    {
        "title": "Staging Plattform",
        "dates": "2009-2011",
        "description": "A set of data integration tools managing a mutliple providers for Risk management purpose",
        "images": ["http://placehold.it/350x150"],
    },
    {
        "title": "c2s",
        "dates": "2014-now",
        "description": "Team Leader for a team of developpers. Managing and accompanying them in their different projects",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"],
    },
    ],
};


//Resume building functions
var replacementVariable = "%data%";

//bio
function displayBio() {
    var formattedName = HTMLheaderName.replace(replacementVariable, "Ivan Elimbi");
    var formattedRole = HTMLheaderRole.replace(replacementVariable, "Web Developper");
    $(formattedName).insertBefore("#topContacts");
    $(formattedRole).insertAfter("#name");

    var formatteBioPic = HTMLbioPic.replace(replacementVariable, bio.biopic);
    $("#header").append(formatteBioPic);

    var formatteWelcomeMsg = HTMLwelcomeMsg.replace(replacementVariable, bio.welcomeMessage);
    $("#header").append(formatteWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var fomattedSkill = HTMLskills.replace(replacementVariable, skill);
            $("#skills").append(fomattedSkill);
        });
    }
}

function displayContact() {
    var formatedHTMLMobile = HTMLmobile.replace(replacementVariable, bio.contacts.mobile);
    $("#topContacts").append(formatedHTMLMobile);
    $("#footerContacts").append(formatedHTMLMobile);

    var formatedHTMLEmail = HTMLemail.replace(replacementVariable, bio.contacts.email);
    $("#topContacts").append(formatedHTMLEmail);
    $("#footerContacts").append(formatedHTMLEmail);

    var formatedHTMLGithub = HTMLgithub.replace(replacementVariable, bio.contacts.github);
    $("#topContacts").append(formatedHTMLGithub);
    $("#footerContacts").append(formatedHTMLGithub);

    var formatedHTMLLocation = HTMLlocation.replace(replacementVariable, bio.contacts.location);
    $("#topContacts").append(formatedHTMLLocation);
    $("#footerContacts").append(formatedHTMLLocation);
}

bio.display = function () {
    displayBio();
    displayContact();
};


//Work
function displayWork(job) {
    $("#workExperience").append(HTMLworkStart);
    var formatedHTMLworkEmployer = HTMLworkEmployer.replace(replacementVariable, job.employer);
    var formatedHTMLworkTitle = HTMLworkTitle.replace(replacementVariable, job.title);
    var line = formatedHTMLworkEmployer.concat(formatedHTMLworkTitle);
    var formattedDate = HTMLworkDates.replace(replacementVariable, job.dates);
    var formattedLoacation = HTMLworkLocation.replace(replacementVariable, job.location);
    var formattedDescription = HTMLworkDescription.replace(replacementVariable, job.description);
    $(".work-entry:last").append(line);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedLoacation);
    $(".work-entry:last").append(formattedDescription);
}

work.display = function () {
    work.jobs.forEach(displayWork);
};

//Project
function displayProject(proj) {
    $("#projects").append(HTMLprojectStart);
    var formatedHTMLprojectTitle = HTMLprojectTitle.replace(replacementVariable, proj.title);
    $(".project-entry:last").append(formatedHTMLprojectTitle);
    var formatedHTMLprejectDates = HTMLprojectDates.replace(replacementVariable, proj.dates);
    $(".project-entry:last").append(formatedHTMLprejectDates);
    var formatedHTMLprejectDesc = HTMLprojectDescription.replace(replacementVariable, proj.description);
    $(".project-entry:last").append(formatedHTMLprejectDesc);
    proj.images.forEach(function (img) {
        var formatedHTMLprejectImg = HTMLprojectImage.replace(replacementVariable, img);
        $(".project-entry:last").append(formatedHTMLprejectImg);
    });
}

projects.display = function () {
    projects.projects.forEach(displayProject);
};

//Education
education.display = function () {
    if (education.schools.length > 0) {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formatedHTMLSchoolName = HTMLschoolName.replace(replacementVariable, school.name);
            var formatedHTMLSchoolDegree = HTMLschoolDegree.replace(replacementVariable, school.degree);
            var formatedHTMLSchoolDates = HTMLschoolDates.replace(replacementVariable, school.dates);
            var formatedHTMLSchoolLocaTion = HTMLschoolLocation.replace(replacementVariable, school.location);
            var formatedHTMLSchoolMajor;
            if (school.majors.length > 1) {
                var concatMajors;
                school.majors.forEach(function (major) {
                    if (concatMajors !== undefined) {
                        concatMajors = concatMajors + " / " + major;
                    }
                    else {
                        concatMajors = major;
                    }
                }, concatMajors);
                formatedHTMLSchoolMajor = HTMLschoolMajor.replace(replacementVariable, concatMajors);
            }
            else {
                formatedHTMLSchoolMajor = HTMLschoolMajor.replace(replacementVariable, school.majors);
            }
            $(".education-entry:last").append(formatedHTMLSchoolName + formatedHTMLSchoolDegree);
            $(".education-entry:last").append(formatedHTMLSchoolDates);
            $(".education-entry:last").append(formatedHTMLSchoolLocaTion);
            $(".education-entry:last").append(formatedHTMLSchoolMajor);
        });
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (onlineClass) {
            $("#education").append(HTMLonlineStart);
            var formatedHTMLOnlineTitle = HTMLonlineTitle.replace(replacementVariable, onlineClass.title);
            var formatedHTMLOnlineSchool = HTMLonlineSchool.replace(replacementVariable, onlineClass.school);
            var formatedHTMLOnlineDates = HTMLonlineDates.replace(replacementVariable, onlineClass.dates);
            var formatedHTMLOnlineURL = HTMLonlineURL.replace(replacementVariable, onlineClass.url);

            $(".online-entry:last").append(formatedHTMLOnlineTitle + formatedHTMLOnlineSchool);
            $(".online-entry:last").append(formatedHTMLOnlineDates);
            $(".online-entry:last").append(formatedHTMLOnlineURL);
        });
    }
};

//Resume building calls
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap); 