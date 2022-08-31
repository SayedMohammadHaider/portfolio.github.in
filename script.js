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
        "Progress": "95%"
    },
    {
        "Name": "LINQ",
        "Progress": "95%"
    },
    {
        "Name": "Dot Net Core",
        "Progress": "90%"
    },
    {
        "Name": "Core WCF",
        "Progress": "90%"
    },
    {
        "Name": "Entity Framework",
        "Progress": "85%"
    },
    {
        "Name": "Azure",
        "Progress": "80%"
    }
]

buildSkillDesign();
function buildSkillDesign() {
    var design = '';
    for (var i = 0; i < skills.length; i++) {
        design += '<div class="skillBox"> <div class="skillText"> <div class="skillPercent">' + skills[i].Name + '</div> <div class="skillPercent">' + skills[i].Progress + '</div> </div> <div class="skillContaier"> <div class="skill" style="width:' + skills[i].Progress + '"></div> </div> </div>';
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

