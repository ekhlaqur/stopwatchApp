let [milliseconds, seconds, minutes, hours]=[0,0,0,0];
const timecount = document.querySelector(".timer");
let initial = null;
document.getElementById("start").addEventListener("click", () => {
    if(initial !==null){
        clearInterval(initial);
    }
    initial = setInterval(showTimer, 10)
});
document.getElementById("pause").addEventListener("click", () =>{
    clearInterval(initial);
});
document.getElementById("reset").addEventListener("click", () =>{
    clearInterval(initial);
    [milliseconds, seconds, minutes, hours]=[0,0,0,0];
    timecount.innerHTML = "00 : 00: 00: 000";
});
function showTimer() {
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms = 
    milliseconds < 10 
    ? "00" + milliseconds
    : milliseconds < 100 
    ? "0" + milliseconds 
    : milliseconds;

    timecount.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
