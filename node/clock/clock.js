function updateTime(){
    let timeElement = document.getElementById("time")
 
    let date =  new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()
if (milliseconds <=999 && milliseconds >=100){
milliseconds = "0" + milliseconds
}
if (seconds<10){
    seconds = "0"+ seconds
}
if (minutes<10){
    minutes = "0"+ minutes
}
if (hours<10){
    hours = "0"+ hours
}
    timeElement.innerText = hours + ":" + minutes + ":" + seconds + ":" + milliseconds
}   setInterval(updateTime)
