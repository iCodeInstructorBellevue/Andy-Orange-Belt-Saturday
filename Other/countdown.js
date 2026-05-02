function updateTime(){
    let timeElement = document.getElementById("time")

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amPm = "am"

    if (hours > 12) {
        amPm = "pm"
        hours -= 12
    }

    timeElement.innerText = hours + ":" + minutes + ":" + seconds
} 

setInterval(updateTime);

const deadline = new Date("july, 31, 2088 15:37:25")

var x = setInterval(function(){
    var now = new Date().getTime();
    var t = deadline - now
    var days = Math.floor(t / (60000 * 60 * 60 * 24) );
    var hours = Math.floor((t % (60000 * 60 * 60 * 24)) / (60000 * 60 * 60));
    var minutes = Math.floor((t % (60000 * 60)) / 60000)

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

    if (t > 0) {
        clearInterval(x);
            document.getElementById('demo').intervalHTML = "TIME'S UP";
            document.getElementById('day').innerHTML = 0;
            document.getElementById('hour').innerHTML = 0;
            document.getElementById('minute').innerHTML = 0;
            document.getElementById('msecond').innerHTML = 0;
    }
})