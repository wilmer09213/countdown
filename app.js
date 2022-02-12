

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


let targetDate = new Date("Feb 28, 2022 13:00:00");
let targetDateCount = targetDate.getTime();

let targetDateShow = targetDate.toLocaleString("default", 
{
    month: "long", 
    weekday: "long", 
    day: "numeric", 
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});


document.getElementsByClassName("target-date")[0].textContent = `Target Date: ${targetDateShow}`;

setInterval(() => {
    let date = new Date()

    let timeLeft = (targetDateCount - date.getTime())
    let timerDays = Math.floor(timeLeft/day);
    let timerHours = Math.floor((timeLeft % day) / hour);
    let timerMinutes = Math.floor((timeLeft % hour) / minute);
    let timerSeconds = Math.floor((timeLeft % minute) / second);

    document.getElementsByClassName("timer")[0].textContent = `${timerDays} : ${timerHours} : ${timerMinutes} : ${timerSeconds}`;

    if(timeLeft < 0) {
        clearInterval();
        document.getElementsByClassName("timer")[0].textContent = "Done";
    }
}, 1000)