let cel = document.getElementById('cel');
let fah = document.getElementById('fah');


//===== CONVERTING CELSIUS TO FAHRENHEIT
cel.addEventListener('input', function(){
    let f = (this.value * 9/5) + 32;
    if(!Number.isInteger(f)){
        f = Number(f.toFixed(3));
    }
    fah.value = f;
});

//===== CONVERTING FAHRENHEIT TO CELSIUS
fah.addEventListener('input', function(){
    let c = (this.value - 32)* 5/9;
    if(!Number.isInteger(c)){
        c = Number(c.toFixed(3));
    }
    cel.value = c
});