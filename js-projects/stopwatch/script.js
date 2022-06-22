let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let hr = sec = min = count = 0;
let timer = false;


// ==== ADDING EVENTS TO BUTTONS ==== 
start.addEventListener('click', function() {
    timer = true;
    document.getElementById('container').style.color = "#d7dfe4";
    stopwatch();
});
stop.addEventListener('click', function() {
    timer = false;
    document.getElementById('container').style.color = getComputedStyle(this).backgroundColor;
});
reset.addEventListener('click', function() {
    timer = false;
    hr=min=sec=count = 0;
    document.getElementById('container').style.color = getComputedStyle(this).backgroundColor;
    
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});


// ====FUNCTION TO CONTROL STOPWATCH =====
function stopwatch() {
    if(timer == true){
        ++count;

        // Checking extreme point of time handlers
        if(count==100){ ++sec; count=0; }
        if(sec==60){ ++min; sec=count=0; }
        if(min==60){ ++hr; min=sec=0; }

        // converting integer to string to get double digit
        let [hrStr, minStr, secStr, countStr] = [hr, min, sec, count];
        if(hrStr<10){ hrStr = "0" + hrStr; }
        if(minStr<10){ minStr = "0" + minStr; }
        if(secStr<10){ secStr = "0" + secStr; }
        if(countStr<10){ countStr = "0" + countStr; }

        // Manipulating hr, min, sec in HTML with JS
        document.getElementById('count').innerHTML = countStr;
        document.getElementById('sec').innerHTML = secStr;
        document.getElementById('min').innerHTML = minStr;
        document.getElementById('hr').innerHTML = hrStr;
        
        setTimeout(stopwatch, 10);   
    }
}