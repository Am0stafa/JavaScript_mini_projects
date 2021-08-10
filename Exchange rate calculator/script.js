const curreny1 = document.getElementById('currency-one');
const curreny2 = document.getElementById('currency-two');
const amount1 = document.getElementById('amount-one');
const amount2 = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swapbtn = document.getElementById('swap');
const apikey = 'https://v6.exchangerate-api.com/v6/4735cd341ad8cbae2d3b29d4/pair/'



function calculator() {
    const curr1 = curreny1.value;
    const curr2 =   curreny2.value;
   const kam1 = amount1.value;
   const kam2 = amount2.value;

   fetch(apikey+curr1+'/'+curr2) .then(res => res.json())
   .then(data => {
        console.log(data);
        const rate = data.conversion_rate;
        rateEl.innerText = `1 ${curr1} = ${rate} ${curr2}`;

        amount2.value = `${kam1*rate}`
   
   });

}

curreny1.addEventListener('change',()=>{
    calculator();
});
curreny2.addEventListener('change',()=>{
    calculator();
});

//try keydown
amount1.addEventListener('change',()=>{
    calculator();
})

calculator();

swapbtn.addEventListener('click',()=>{
    swapcalc();
})


function swapcalc() {

    const temp =curreny1.value ;
   curreny1.value = curreny2.value;
   curreny2.value =temp;


    const curr1 = curreny1.value;
    const curr2 =   curreny2.value;

    
   const kam1 = amount1.value;
   const kam2 = amount2.value;

   fetch(apikey+curr1+'/'+curr2) .then(res => res.json())
   .then(data => {
        console.log(data);
        const rate = data.conversion_rate;
        rateEl.innerText = `1 ${curr1} = ${rate} ${curr2}`;

        amount2.value = `${kam1*rate}`
   
   });

}