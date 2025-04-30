var second = 0;
var minute = 0;
var hour = 0;
var d = new Date(); //current time every second.

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6; //360 / 60 = 6 deg
        minute = d.getMinutes() * 6; // 6deg
        hour = d.getHours() * 30 + Math.round(minute / 12); // 360/12 = 30deg

        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    }, 1000 //Runs the function every 1000 milliseconds (1 second).
);