const container = document.querySelector('.container');
const seatsEL = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movielist = document.getElementById('movie');
let price = movielist.value;

seatsEL.forEach(seat => {
    seat.addEventListener('click', (e) =>{

        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

           e.target.classList.toggle('selected');

           updatetotal();
            }

    })
});


movielist.addEventListener('change',(e)=>{
    price =e.target.value;
    updatetotal();

    
})





function updatetotal(){
        const selected = document.querySelectorAll('.row .seat.selected')

    
count.innerText = selected.length ;

total.innerText = selected.length * price;

}