
const daysEL= document.getElementById('days')
const hoursEL= document.getElementById('hours')
const minEL= document.getElementById('min')
const secondEL= document.getElementById('second')

const newYears='26 oct 2022'

function countdown() {

const newYearsDate=new Date(newYears);

const currentDate=new Date();

const totalsecond=(newYearsDate - currentDate) / 1000;

const days= Math.floor( totalsecond / 3600 / 24);

const hours = Math.floor( totalsecond /3600) % 24;

const min= Math.floor( totalsecond /60) %  60;

const second= Math.floor(totalsecond)%60;

console.log(days , hours , min,second);

daysEL.innerHTML=days;
hoursEL.innerHTML=hours;
minEL.innerHTML=min;
secondEL.innerHTML=formatTime(second);
}

function formatTime(time)
{
    return time < 00?  '0 $ {time}': time;
}
countdown();

setInterval(countdown,1000);