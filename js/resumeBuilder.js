/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  $("#main").append("Ivan"); 

//  var awesomeThoughts = "I am Ivan and I'm awesome"; 
//  console.log(awesomeThoughts); 

//  var funThoughts = awesomeThoughts.replace("awesome", "fun"); 
//  $("#main").append(funThoughts);

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
    "skills": ["Web", ".NET", "SQL", "NoSQL", "Software Craftmanship", "Project Management"]
};

var education = {
    schools: [{
        "name": "ECE",
        "degree": "Master",
        "dates": "2018",
        "location": "Paris",
        "major": ["Telecomunication and Network"],
    },
    ],
    onlineCourses: [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/"
    },
    ]
};

var work = {
    jobs: [{
        "employer": "Acensi",
        "title": "Junior Developper",
        "location": "Paris",
        "dates": "2008-2010",
        "description": "Junior for a front-office IT Team at an Asset Manager"
    },
    {
        "employer": "Phirst Vanilla",
        "title": "Developper",
        "location": "Paris",
        "dates": "2010-2014",
        "description": "Lead developper for a front office IT team  at an Asset Manager"
    },
    {
        "employer": "Acensi",
        "title": "Senior Developper",
        "location": "Paris",
        "dates": "2014-now",
        "description": "Team Leader for a software team"
    }
    ]
}

var projects = {
    "projects": [{
        "title": "Dexia AM",
        "dates": "2008-2009",
        "description": "A job",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"],
    },
    {
        "title": "Natixis CIB",
        "dates": "2009-2011",
        "description": "A job",
        "images": ["http://placehold.it/350x150"],
    },
    {
        "title": "AXA IM",
        "dates": "2011-2014",
        "description": "A job",
        "images": ["http://placehold.it/350x150"],
    },
    {
        "title": "AXA IM",
        "dates": "2014-now",
        "description": "A job",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"],
    },
    ],
};

var replacementVariable = "%data%";

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
};

function displayContact() {
    var formatedHTMLMobile = HTMLmobile.replace(replacementVariable, bio.contacts.mobile);
    $("#topContacts").append(formatedHTMLMobile);
    $("#footerContacts").append(formatedHTMLMobile);
    footerContacts
    var formatedHTMLEmail = HTMLemail.replace(replacementVariable, bio.contacts.email);
    $("#topContacts").append(formatedHTMLEmail);
    $("#footerContacts").append(formatedHTMLEmail);
    var formatedHTMLGithub = HTMLgithub.replace(replacementVariable, bio.contacts.github);
    $("#topContacts").append(formatedHTMLGithub);
    $("#footerContacts").append(formatedHTMLGithub);
};

bio.display = function () {
    displayBio();
    displayContact();
};

bio.display();

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
};

work.display = function () {
    work.jobs.forEach(displayWork);
};

work.display();

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

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
};

projects.display = function () {
    projects.projects.forEach(displayProject);
}

projects.display();


education.display = function () {
    if (education.schools.length > 0) {        
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formatedHTMLSchoolName = HTMLschoolName.replace(replacementVariable, school.name);
            var formatedHTMLSchoolDegree = HTMLschoolDegree.replace(replacementVariable, school.degree);
            var formatedHTMLSchoolDates = HTMLschoolDates.replace(replacementVariable, school.dates);
            var formatedHTMLSchoolLocaTion = HTMLschoolLocation.replace(replacementVariable, school.location);
            var formatedHTMLSchoolMajor = HTMLschoolMajor.replace(replacementVariable, school.major);
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

education.display();




