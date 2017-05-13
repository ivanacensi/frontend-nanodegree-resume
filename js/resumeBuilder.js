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
            "description": ""
        },
        {
            "employer": "Phirst Vanilla",
            "tittle": "Developper",
            "location": "Paris",
            "dates": "2010-2014",
            "description": "Leade developper on finance softaware project"
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
            "title": "Dexia AM",
            "Dates": "2008-2009",
            "Description": "",
        },
        {
            "title": "Natixis CIB",
            "Dates": "2009-2011",
            "Description": "",
        },
        {
            "title": "AXA IM",
            "Dates": "2011-2014",
            "Description": "",
        },
        {
            "title": "AXA IM",
            "Dates": "2014-now",
            "Description": "",
        },
    ],

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
