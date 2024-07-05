function realtime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours, minutes, seconds);
    if (hours > 12) {
        hours = hours - 12;
    }
    const hour=document.getElementById("hrs")
    hour.textContent = hours;
    const minute= document.getElementById("mins")
    minute.textContent = minutes;
    const second=document.getElementById("secs")
    second.textContent = seconds;
}
setInterval(()=>{
realtime()
},1000)

let date = new Date();
let hours = date.getHours();
if (hours >= 12) {
    const pm=document.getElementById("ampm")
    pm.textContent = "PM";
} else {
   const am= document.getElementById("ampm")
    am.textContent = "AM";
}
let button = document.getElementById("button");
button.addEventListener("mouseover", function () {
    this.textContent = "Party Time";
});
button.addEventListener("mouseout", function () {
    this.textContent = "Set Alarm";
});
let greeting = document.getElementById("greeting");
if (hours >= 12 && hours < 16) {
    greeting.textContent = "Good Afternoon";
} else if (hours >= 16 && hours <= 20) {
    greeting.textContent = "Good Evening";
} else if (hours >= 20 && hours <= 24) {
    greeting.textContent = "Good Night";
}
button.addEventListener("click", function () {
    let date = new Date();
    let hours = date.getHours();
    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");
    if (parseInt(wakeUp.value) === hours) {
        const breakfast = document.getElementById("settime");
        breakfast.textContent = "Grab some Breakfast!";
        const imageone=document.getElementById("clockimage")
        imageone.src="./imageComponent 30 – 1.svg";
    } 
    else if (parseInt(lunch.value) === hours) {
        const lunch = document.getElementById("settime")
        lunch.textContent = "Let's have some Lunch!";
       const imagetwo= document.getElementById("clockimage")
        imagetwo.src= "./imageComponent 31 GÇô 1.jpg";
    } 
    else if (parseInt(nap.value) === hours) {
        const nap = document.getElementById("settime");
        nap.textContent = "Get some Tea!";
        const imagethree=document.getElementById("clockimage")
        imagethree.src = "./imagelunch_time.svg";
    } 
    else if (parseInt(night.value) === hours) {
        const night = document.getElementById("settime");
        night.textContent = "Go to Sleep";
       const imagefour= document.getElementById("clockimage")
        imagefour.src = "./imagegoodnight_image.svg";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
});









