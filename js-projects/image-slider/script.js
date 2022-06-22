let slides = document.getElementsByClassName('slide');
let prevArrow = document.getElementById('prev');
let nextArrow = document.getElementById('next');

let slideCount = 0;

//==== TO SET THE DEFAULT IMAGE (INITIALLY)
slideShow(slideCount);


//==== EVENT LISTENER WHEN CLICK THE ARROW
prevArrow.addEventListener('click', function() {
    controller(-1);
});
nextArrow.addEventListener('click', function() {
    controller(1);
});


//==== FUNCTION TO CONTROL THE NEXT/PREV IMAGE
function controller(param) {
    slideCount += param;
    slideShow(slideCount);
}


//==== FUNCTION TO SHOW THE IMAGES AS PER THEIR TURN
function slideShow(count) {

    // when want to see next img of last img, then it directs to 1st img
    if(count==slides.length){
        slideCount= count = 0;
    }

    // when want to see prev img of 1st img, then it directs to last img 
    if(count < 0){
        slideCount= count = slides.length-1;
    }

    // hiding those images whose turn is not there
    for(let elem of slides){
        elem.style.display = 'none';
    }
    // to display that image whose turn it is
    slides[count].style.display = 'block';
}