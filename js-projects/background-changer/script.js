let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');

// ==== FUNCTION TO CHANGE BACKGROUND COLOR ====
function changeBG(color){
    document.body.style.backgroundColor = color;
}

// ==== ADDING CLICK EVENT LISTENER TO EACH COLOR ====
// COLOR 1
color1.addEventListener('click', function(){
    changeBG(getComputedStyle(color1).backgroundColor);
} );

// COLOR 2
color2.addEventListener('click', function(){
    changeBG(getComputedStyle(color2).backgroundColor);
} );

// COLOR 3
color3.addEventListener('click', function(){
    changeBG(getComputedStyle(color3).backgroundColor);
} );

// COLOR 4
color4.addEventListener('click', function(){
    changeBG(getComputedStyle(color4).backgroundColor);
} );