const textEL = document.getElementById('text');
const speedEL = document.getElementById('speed');
const text = 'Welcome to the page';
textEL.innerHTML = text;
let index = 1;
let speed = 300 / speedEL.value
wrighttext();
function wrighttext() {
    textEL.innerText = text.slice(0,index);
    index++;
    if(index===text.length+1){
        index=1;
    }

    setTimeout(wrighttext, speed)

}
speedEL.addEventListener('input',(e)=>{
speed=speed = 300/speedEL.value;
});

