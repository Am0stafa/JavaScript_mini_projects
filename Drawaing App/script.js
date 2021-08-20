const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size=10;
let ispress=false;
let color='black';
let x;
let y;
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

colorEl.addEventListener('change', (e) => color = e.target.value)

sizeEL.innerText=size;
clearEl.addEventListener('click', ()=>{
    location.reload();
})

increaseBtn.addEventListener('click', ()=>{
    size++;
    sizeEL.innerText=size;
})

decreaseBtn.addEventListener('click', ()=>{
    size--;
    sizeEL.innerText=size;
})

canvas.addEventListener('mousedown',(e) => {
    ispress=true;
    x=e.offsetX;
    y=e.offsetY;
    drawcircles(x,y);
})

canvas.addEventListener('mouseup',(e) => {
    ispress=false;
    x=undefined;
    y=undefined;
})

canvas.addEventListener('mousemove',(e) => {
    if(ispress){
        const x2 = e.offsetX;
        const y2 =e.offsetY;
        drawcircles(x2,y2);
        drawLine(x,y, x2,y2);
        x=x2; y=y2;
    }


})



function drawcircles(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle =color;
    ctx.fill();

}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
