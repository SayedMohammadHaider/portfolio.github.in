$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });
});

var skills = [
    {
        "Name": "C#",
        "Progress": "80%"
    },
    {
        "Name": "LINQ",
        "Progress": "70%"
    },
    {
        "Name": "Dot Net Core",
        "Progress": "70%"
    },
    {
        "Name": "Core WCF",
        "Progress": "70%"
    },
    {
        "Name": "Entity Framework",
        "Progress": "65%"
    },
    {
        "Name": "Azure",
        "Progress": "50%"
    },
    {
        "Name": "Sharepoint",
        "Progress": "50%"
    },
    {
        "Name": "SQL",
        "Progress": "50%"
    },
    {
        "Name": "React JS",
        "Progress": "50%"
    },
    {
        "Name": "HTML/CSS",
        "Progress": "40%"
    }
]

buildSkillDesign();
function buildSkillDesign() {
    var design = '';
    for (var i = 0; i < skills.length; i++) {
        design += '<div class="skillBox"> <div class="skillText"> <p>' + skills[i].Name + '</p> </div> <div class="skillContaier" style="width:' + skills[i].Progress + '"> <div class="skill">' + skills[i].Progress +'</div> </div> </div>';
    }
    var skillBox = document.getElementById("boxSkill");
    skillBox.innerHTML = design;
}

calculateAge();
function calculateAge() {
    var ageText = document.getElementById("age");
    const now = new Date();
    var date = new Date();
    date.setFullYear(1994, 3, 19);
    const diff = Math.abs(now - date);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    ageText.innerHTML = '<span> age : </span>' + age;
}

