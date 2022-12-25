const timeLeft = document.getElementById("time-left");
const spanDays = document.querySelector(".span-day");
const spanHours = document.querySelector(".span-hours");
const spanMin = document.querySelector(".span-min");
const spanSeconds = document.querySelector(".span-sec");


const NewYear = new Date('12/31/2023')//(day/month/year)
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24 ;// milliseconds
let timerId;






function countDown() {
    const today = new Date();
    const timeSpan = NewYear - today;
    
    if (timeSpan <= -day) {
        timeLeft.textContent = "Hope you had a nice NewYear!"
        clearInterval(timerId);
        return
    }
    if (timeSpan <= 0) {
        timeLeft.textContent = "Happy NewYear!!!"
        clearInterval(timerId);
        return
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute); 
    const seconds = Math.floor((timeSpan % minute) / second);

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMin.textContent = minutes;
    spanSeconds.textContent = seconds;
    //timeLeft.textContent = `${days}days ${hours}hrs $//{minutes}min ${seconds}sec`
}

timerId = setInterval(countDown , second)

