/*
first day of winter -- December 21 2021
current date
subtract them to calc countdown
*/

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const winterDay = '21 Dec 2021'

function countdown() {
    const winterDate = new Date(winterDay);
    const currentDate = new Date();

    const totalSeconds = (winterDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60
    const mins = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600) % 24
    const days = Math.floor(totalSeconds / 3600 / 24)

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);
      
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);