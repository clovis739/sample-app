const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


const newYears = "10 Dec 2023";


function countdown (){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const  totalSecond =(newYearsDate - currentDate) / 1000;

    const days  = Math.floor(totalSecond / 3600/24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds =Math.floor( totalSecond) % 60;

    daysEl.innerHTML = days

    hoursEl.innerHTML = formatTime (hours)
    minsEl.innerHTML = formatTime (mins)
    secondsEl.innerHTML =formatTime (seconds)
    console.log(days, mins, hours, seconds)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initaial call

countdown();

setInterval(countdown, 1000); 