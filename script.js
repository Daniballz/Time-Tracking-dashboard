//Getting the time frames
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

//Importing data from json file
import data from "./data.js";
const array = JSON.parse(data);

//assigning various categories
const work = array[0];
const play = array[1];
const study = array[2];
const exercise = array[3];
const social = array[4];
const selfcare = array[5];


//Timeframes of all categories
const workCurrent = document.getElementById("work-current");
const workPrevious = document.getElementById("work-previous");

const playCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");

const studyCurrent = document.getElementById("study-current");
const studyPrevious = document.getElementById("study-previous");

const exerCurrent = document.getElementById("exercise-current");
const exerPrevious = document.getElementById("exercise-previous");

const socialCurrent = document.getElementById("social-current");
const socialPrevious = document.getElementById("social-previous");

const selfcareCurrent = document.getElementById("selfcare-current");
const selfcarePrevious = document.getElementById("selfcare-previous");

//Event listener for the daily view
dailyBtn.addEventListener("click", () => {
    workCurrent.textContent = `${work.timeframes.daily.current}hrs`;
    workPrevious.textContent = `Last Week - ${work.timeframes.daily.previous}hrs`;

    playCurrent.textContent = `${play.timeframes.daily.current}hrs`;
    playPrevious.textContent = `Last Week - ${play.timeframes.daily.previous}hrs`;

    studyCurrent.textContent = `${study.timeframes.daily.current}hrs`;
    studyPrevious.textContent = `Last Week - ${study.timeframes.daily.previous}hrs`;
    
    exerCurrent.textContent = `${exercise.timeframes.daily.current}hrs`;
    exerPrevious.textContent = `Last Week - ${exercise.timeframes.daily.previous}hrs`;

    socialCurrent.textContent = `${social.timeframes.daily.current}hrs`;
    socialPrevious.textContent = `Last Week - ${social.timeframes.daily.previous}hrs`;

    selfcareCurrent.textContent = `${selfcare.timeframes.daily.current}hrs`;
    selfcarePrevious.textContent = `Last Week - ${selfcare.timeframes.daily.previous}hrs`;        
})

//Event listener for the weekly view
weeklyBtn.addEventListener("click", () => {
    workCurrent.textContent = `${work.timeframes.weekly.current}hrs`;
    workPrevious.textContent = `Last Week - ${work.timeframes.weekly.previous}hrs`;

    playCurrent.textContent = `${play.timeframes.weekly.current}hrs`;
    playPrevious.textContent = `Last Week - ${play.timeframes.weekly.previous}hrs`;

    studyCurrent.textContent = `${study.timeframes.weekly.current}hrs`;
    studyPrevious.textContent = `Last Week - ${study.timeframes.weekly.previous}hrs`;
    
    exerCurrent.textContent = `${exercise.timeframes.weekly.current}hrs`;
    exerPrevious.textContent = `Last Week - ${exercise.timeframes.weekly.previous}hrs`;

    socialCurrent.textContent = `${social.timeframes.weekly.current}hrs`;
    socialPrevious.textContent = `Last Week - ${social.timeframes.weekly.previous}hrs`;

    selfcareCurrent.textContent = `${selfcare.timeframes.weekly.current}hrs`;
    selfcarePrevious.textContent = `Last Week - ${selfcare.timeframes.weekly.previous}hrs`;
})

//Event listener for monthly view
monthlyBtn.addEventListener("click", () => {
    workCurrent.textContent = `${work.timeframes.monthly.current}hrs`;
    workPrevious.textContent = `Last Week - ${work.timeframes.monthly.previous}hrs`;

    playCurrent.textContent = `${play.timeframes.monthly.current}hrs`;
    playPrevious.textContent = `Last Week - ${play.timeframes.monthly.previous}hrs`;

    studyCurrent.textContent = `${study.timeframes.monthly.current}hrs`;
    studyPrevious.textContent = `Last Week - ${study.timeframes.monthly.previous}hrs`;
    
    exerCurrent.textContent = `${exercise.timeframes.monthly.current}hrs`;
    exerPrevious.textContent = `Last Week - ${exercise.timeframes.monthly.previous}hrs`;

    socialCurrent.textContent = `${social.timeframes.monthly.current}hrs`;
    socialPrevious.textContent = `Last Week - ${social.timeframes.monthly.previous}hrs`;

    selfcareCurrent.textContent = `${selfcare.timeframes.monthly.current}hrs`;
    selfcarePrevious.textContent = `Last Week - ${selfcare.timeframes.monthly.previous}hrs`;
})