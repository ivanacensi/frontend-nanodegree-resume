/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  $("#main").append("Ivan"); 

//  var awesomeThoughts = "I am Ivan and I'm awesome"; 
//  console.log(awesomeThoughts); 

//  var funThoughts = awesomeThoughts.replace("awesome", "fun"); 
//  $("#main").append(funThoughts);

var replacementVariable = "%data%";

var formattedName = HTMLheaderName.replace(replacementVariable, "Ivan Elimbi");
var formattedRole = HTMLheaderRole.replace(replacementVariable, "Web Developper");

$("#header").append(formattedName);
$("#header").append(formattedRole);

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
        "images": ["http://placehold.it/350x150","http://placehold.it/350x150"],
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
        "images": ["http://placehold.it/350x150","http://placehold.it/350x150"],
    },
    ],
};

var bio = {
    "name": "Ivan Elimbi",
    "role": "Developper",
    "welcomeMessage": "",
    "biopic": "",
    "contacts": {
        "mobile": "0675420049",
        "email": "ivan.elimbi@acensi.fr",
        "github": "ivanacensi",
        "location": "Paris",
    },
    "skills": ["Web", ".NET", "SQL", "NoSQL", "Software Craftmanship", "Project Management"]
};

var education = {
    schools: [{
        "name": "ECE",
        "degre": "Master III",
        "location": "Paris",
        "majors ": ["Telecomunication and Network"],
    },
    {
        "name": "Jeannne D'Albret",
        "degre": "Prepa",
        "location": "Saint-Germain en Laye",
        "majors  ": ["Physique-Chimie"],
    },
    {
        "name": "Paul Lapie",
        "degre": "Lycée",
        "location": "Courbevoie",
        "majors ": ["Physique-Chimie"],
    },
    ]
}

HTMLheaderName = HTMLheaderName.replace(replacementVariable, bio.name);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatedHTMLworkEmployer = HTMLworkEmployer.replace(replacementVariable, work.jobs[job].employer);
        var formatedHTMLworkTitle = HTMLworkTitle.replace(replacementVariable, work.jobs[job].title);
        var line = formatedHTMLworkEmployer.concat(formatedHTMLworkTitle);
        var formattedDate = HTMLworkDates.replace(replacementVariable, work.jobs[job].dates);
        var formattedLoacation = HTMLworkLocation.replace(replacementVariable, work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace(replacementVariable, work.jobs[job].description);
        $(".work-entry:last").append(line);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLoacation);
        $(".work-entry:last").append(formattedDescription);
    }
};

displayWork();

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