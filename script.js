const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const continueBtn = document.querySelector('.continue');
const pauseBtn = document.querySelector('.pause');
const restartBtn = document.querySelector('.restart');
const milisecond = document.querySelector('.milisecond');
let miliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let intervalId = "";
const timingStart = ()=>{
    miliSecond += 10;
    if(miliSecond == 1000){
        miliSecond = 0;
        second += 1;
        if(second == 60){
            second = 0;
            minute += 1;
            if(minute == 60){
                minute = 0;
                hour += 1;
            }
        }
    }
    if(miliSecond < 10){
        miliSecondText = "00"+ miliSecond;
    }else if(miliSecond < 100){
        miliSecondText = "0"+miliSecond;
    }else{
        miliSecondText = miliSecond;
    }
    secondText = second < 10 ? "0" + second : second;
    minuteText = minute < 10 ? "0" + minute : minute;
    hourText = hour < 10 ? "0" + hour : hour;
    let result = hourText + ":" +minuteText + ":" +secondText;
    timer.textContent = result;
    milisecond.textContent = miliSecondText;
}

startBtn.addEventListener('click',()=>{
    intervalId = setInterval(()=>{
        timingStart()
    },10);
})

pauseBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
})

continueBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        timingStart()
    },10);
})

restartBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    second = 0;
    minute = 0;
    hour = 0;
    intervalId = setInterval(()=>{
        timingStart()
    },10);
})
