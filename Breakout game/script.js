const showrulesbtn = document.getElementById('rules-btn');
const closerulesbtn = document.getElementById('close-btn');
const rules = document.getElementById('rules')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const scoreel = document.getElementById('score');
const rows=11;
const column=6;

showrulesbtn.addEventListener('click', () => {
    rules.classList.add('show');
});

closerulesbtn.addEventListener('click', () => {
    rules.classList.remove('show');
})
let score =0;
setInterval(() => {
    scoreel.innerText=`Score: ${score}`   
}, 100);


//ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}


function drawball() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'rgb(22, 92, 184)';
    ctx.fill();
    ctx.closePath();
}
function showAllBricks() {
    bricks.forEach(column => {
      column.forEach(brick => (brick.visibility = true));
    });
  }

function moveball() {

    ball.x += ball.dx;
    ball.y += ball.dy;

    if(ball.x + ball.size > canvas.width || ball.x - ball.size<0){
        ball.dx*=-1;
    }
    if(ball.y + ball.size >canvas.height|| ball.y - ball.size<0 ){
        ball.dy*=-1;
    }
    console.log(ball.x, ball.y);

    if ( ball.x - ball.size > paddel.x && ball.x + ball.size < paddel.x + paddel.w && ball.y + ball.size > paddel.y) {
    ball.dy = -ball.speed;
    }


    bricks.forEach(row=>{
        row.forEach(element=>{
          if(element.visibility){
            if (
                ball.x - ball.size > element.x && // left element side check
                ball.x + ball.size < element.x + element.w && // right element side check
                ball.y + ball.size > element.y && // top element side check
                ball.y - ball.size < element.y + element.h // bottom element side check
              ) {
                ball.dy *= -1;
                element.visibility = false;
                score++;
          }
          }
        })
        
        
        })


        if (ball.y + ball.size > canvas.height) {
            showAllBricks();
            score = 0;
          }
}


//paddel

const paddel = {
    x: canvas.width / 2 - 53,
    y: canvas.height - 20,
    w:110,
    h:13,
    speed:8,
    dx:0,
    dy:0
}

function drawpaddel(){
    ctx.beginPath();
    ctx.rect(paddel.x, paddel.y,paddel.w,paddel.h);
    ctx.fillStyle = 'rgb(22, 92, 184)';
    ctx.fill();
    ctx.closePath();
}

//brick

const brickobj = {
    w:70,
    h:20,
    padding:13,
    Xoffset:45,
    Yoffset:60,
    visibility:true
}

const bricks =[];
for(let i =0; i<rows; i++){
    bricks[i]=[];
    for (let j = 0; j < column; j++) {
       const x = i * (brickobj.w + brickobj.padding) +brickobj.Xoffset;
       const y = j * (brickobj.h + brickobj.padding) +brickobj.Yoffset;

       bricks[i][j]={x,y,...brickobj}
    }
}

console.log(bricks);



function drawbrick(){

bricks.forEach(row=>{
row.forEach(element=>{
    ctx.beginPath();
    ctx.rect(element.x, element.y,element.w,element.h);
    ctx.fillStyle = element.visibility ? 'rgb(22, 92, 184)':'transparent';
    ctx.fill();
    ctx.closePath();

})


})


}

function movethepaddel(){
    paddel.x+=paddel.dx;
     paddel.h+=paddel.dy;

    if(paddel.x  < 0){
        paddel.x=0;
    }
    if(paddel.x + paddel.w >=canvas.width){
        paddel.x=canvas.width-paddel.w;
    }
        
}





function drawkol7aga(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawpaddel();
    drawball();
    drawbrick();
}


function gameloop(){
    movethepaddel();
    moveball();
    drawkol7aga();
    requestAnimationFrame(gameloop);

}


function keydown(e){
    console.log(e.key)
    if(e.key === 'Right' || e.key === 'ArrowRight') {
        paddel.dx =paddel.speed;
    }

    if(e.key === 'Left' || e.key === 'ArrowLeft') {
        paddel.dx = -(paddel.speed);
    }


}

function keyup(e){
    if(e.key === 'Right' || e.key === 'ArrowRight') {
        paddel.dx =0;
    }

    if(e.key === 'Left' || e.key === 'ArrowLeft') {
        paddel.dx = 0;
    }

}


window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);



gameloop();
window.addEventListener('click',(e) => {
console.log(e.clientX)
console.log(e.clientY)

})

