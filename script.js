
const timer = document.getElementById("stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let milisec  =0;
let stoptime = true;


function start(){
    if(stoptime == true){
        stoptime = false;
        timer_cycle()
        console.log("amar")
    }
}
function stop(){
    if(stoptime == false){
        stoptime = true;
    }
}

function timer_cycle(){
  
    if(stoptime == false){
        sec = parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)
        milisec = parseInt(milisec)

        milisec = milisec + 1;

        if(milisec == 99){
            sec = sec + 1;
            min = 0
            hr = 0;
            milisec = 0
        }

        if(sec == 60){
            min = min + 1
            sec = 0;
            milisec = 0
        }
        if(min == 60){
            hr = hr + 1
            min = 0;
            sec = 0;
            milisec = 0
        }

        if(milisec<10){
            milisec = "0" + milisec
        }
        if(sec<10){
            sec = "0" + sec
        }
        if(min<10){
            min = "0" + min
        }
        if(hr<10){
            hr = "0" + hr
        }
        document.getElementById("milisecond").innerHTML = milisec
        document.getElementById("second").innerHTML = sec
        document.getElementById("minutes").innerHTML = min
        document.getElementById("hours").innerHTML = hr

        setTimeout("timer_cycle()" , 10)


    }
}

function reset(){
    document.getElementById("milisecond").innerHTML = "00"
    document.getElementById("second").innerHTML = "00"
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00"
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
}

// code for dark mode
const check_box = document.getElementById("check")
check_box.addEventListener("click", () => {
    document.body.classList.toggle("dark")
 
})
// code for dark mode end

let body_color = document.getElementById("body")
let text_color = document.querySelectorAll("span")
let heading_color = document.getElementById("heading")


let primary_color = "#ffffff"
let secondry_color = "#e11584"
check_box.addEventListener("click", (arr) => {  // adding event listener to the toggle of night mode changer

    let bg = window.getComputedStyle(body_color).backgroundColor;
    // console.log(bg)
    if (bg == "rgb(41, 44, 53)") {
        text_color[0].style.color = primary_color
        text_color[2].style.color = primary_color
        text_color[4].style.color = primary_color
        text_color[6].style.color = primary_color
        heading_color.style.color = primary_color
    }
    else {
        text_color[0].style.color = secondry_color
        text_color[2].style.color = secondry_color
        text_color[4].style.color = secondry_color
        text_color[6].style.color = secondry_color
        heading_color.style.color =  secondry_color
    }
})