/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  $("#main").append("Ivan"); 

//  var awesomeThoughts = "I am Ivan and I'm awesome"; 
//  console.log(awesomeThoughts); 

//  var funThoughts = awesomeThoughts.replace("awesome", "fun"); 
//  $("#main").append(funThoughts);


var formattedName = HTMLheaderName.replace("%data%", "Ivan Elimbi");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developper");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var work = {
    jobs: [{
        "employer": "Acensi",
        "tittle": "Junior Developper",
        "location": "Paris",
        "dates": "2008-2010",
        "description": "Junior for a front-office IT Team at an Asset Manager"
    },
    {
        "employer": "Phirst Vanilla",
        "tittle": "Developper",
        "location": "Paris",
        "dates": "2010-2014",
        "description": "Lead developper for a front office IT team  at an Asset Manager"
    },
    {
        "employer": "Acensi",
        "tittle": "Senior Developper",
        "location": "Paris",
        "dates": "2014-now",
        "description": "Team Leader for a software team"
    }
    ]
}

var projects = [{
    "tittle": "Dexia AM",
    "Dates": "2008-2009",
    "Description": "A job",
},
{
    "tittle": "Natixis CIB",
    "Dates": "2009-2011",
    "Description": "A job",
},
{
    "tittle": "AXA IM",
    "Dates": "2011-2014",
    "Description": "A job",
},
{
    "tittle": "AXA IM",
    "Dates": "2014-now",
    "Description": "A job",
},
];

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

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formatedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].tittle);
        var line = formatedHTMLworkEmployer.concat(formatedHTMLworkTitle);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLoacation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
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
