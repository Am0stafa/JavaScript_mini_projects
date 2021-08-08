const loadingtext = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let counter=0;

const blurring = ()=>{
    counter++;
    if(counter===100){
        clearInterval(int)
        bg.classList.remove('blur');
        loadingtext.style.display='none';
    }
    loadingtext.textContent=`${counter}%`
}
int = setInterval(blurring,30);