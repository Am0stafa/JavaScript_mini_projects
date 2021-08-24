const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggleEL = document.querySelector(".toggle");
const circleEL = document.querySelector(".circle");


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
toggleEL.addEventListener('click',(e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerText='Dark mode'
    }else{
        html.classList.add('dark');
        toggle.innerText='Light mode'
    }
    
});

function setTime(){
    const time = new Date();
    const month= time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = (time.getHours()) % 12; 
    const minute = time.getMinutes();
    const seconds = time.getSeconds();

    hourEL.style.transform =`translate(-50%, -100%) rotate(${hour*30}deg)`
    minuteEL.style.transform =`translate(-50%, -100%) rotate(${minute*6}deg)`
    secondEL.style.transform =`translate(-50%, -100%) rotate(${seconds*6}deg)`

    timeEL.innerText=`${hour<9?0:''}${hour}:${minute}${minute<9?0:''} ${hour<=12?'AM':'AM'}`
    dateEL.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${date}<span>`;

}

setTime();
setInterval(setTime,10);