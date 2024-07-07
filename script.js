var day=0;
var hr=0;
var min=0;
var sec=0;
var count=0;
var timer = false;
var lapNumber = 0;
var laps = [];
function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    day=0;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("day").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
    document.getElementById("lap-times").innerHTML = "";
}

function lap() {
    if (timer) {
        lapNumber++;
        laps.push({
            lap: lapNumber,
            hour: hr,
            min: min,
            sec: sec,
            count: count
        });

        // Display lap time
        var lapTime = document.createElement("div");
        lapTime.innerHTML = "Lap " + lapNumber + ": " + formatTime(hr, min, sec, count);
        document.getElementById("lap-times").appendChild(lapTime);
    }
}

function formatTime(hr, min, sec, count) {
    var hrString = (hr < 10) ? "0" + hr : hr;
    var minString = (min < 10) ? "0" + min : min;
    var secString = (sec < 10) ? "0" + sec : sec;
    var countString = (count < 10) ? "0" + count : count;
    return hrString + ":" + minString + ":" + secString + "." + countString;
}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;

        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        if(hr==24){
            day=day+1;
            hr=0;
            min=0;
            sec=0;
        }
        var dayString=day;
        var hrString=hr;
        var minString=min;
        var secString=sec;
        var countString=count;

        if(day<10){
            dayString="0"+dayString;
        }
        if(hr<10){
            hrString="0"+hrString;
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }
        if(count<10){
            countString="0"+countString;
        }
        document.getElementById("day").innerHTML=dayString;
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("count").innerHTML=countString;
        setTimeout("stopwatch()", 10);
    }
}