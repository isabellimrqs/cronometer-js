const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval; 

function init(){
    watch();
    interval = setInterval(watch, 1000);
}

//pause button
const pause = () =>{
    clearInterval(interval)
}

const clearAll = () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    watchDocument.innerHTML = "00:00:00";
}

//function to make the 0 appears before the numbers < 10
const digitZero = (digit) => {
    if(digit < 10) {
        return `0${digit}`
    } else {
        return digit
    }
}

//function that makes the watch starts
function watch(){
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;     
    }

    watchDocument.innerHTML = digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}