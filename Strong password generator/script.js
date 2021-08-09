const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const bruteforceEl = document.getElementById('bruteforce');


clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
})


generateEl.addEventListener('click', () => {
    const lengthnumb = +lengthEl.value;
    const haslower =lowercaseEl.checked;
    const hasupper =uppercaseEl.checked;
    const hasnumber =numbersEl.checked;
    const hassymbol =symbolsEl.checked;
    resultEl.innerText =  generatePassword(haslower,hasupper,hasnumber,hassymbol,lengthnumb);


});


bruteforce.addEventListener('click',() => {
    const brodfors = setInterval(() => {
        generateEl.click();
    },10);
    setTimeout(() => {
        clearInterval(brodfors);
    }, 4500);

});



function getrandomlower(){
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   
   return result;
}

function getrandomupper(){
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
   
   return result.toUpperCase();
}

function getrandomnumber(){
    let result           = '';
    let characters       = '1234567890';
    let charactersLength = characters.length;
    
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
   
   return result;
}


function getrandomsymbols(){
    let result           = '';
    let characters       = '!@#$%^&*()_+{}"|:><./,-=?[]«§¿×ÖËÆ';
    let charactersLength = characters.length;
    
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
   
   return result;
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = countthetrusted(lower, upper, number, symbol)
    const typesArr =[{lower}, {upper}, {number}, {symbol}]   .filter(item => Object.values(item)[0])

    //to remove the  item if false
    
    if(lowercase===false && uppercase===false && number===false && symbol===false){
        return ''
        }
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            //to get the object as a string name
            const funcName = Object.keys(type)
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

const randomFunc = {
    lower: getrandomlower,
    upper: getrandomupper,
    number: getrandomnumber,
    symbol: getrandomsymbols
}

function countthetrusted(lower, upper, number, symbol){
    let counter=0;

    if(lower===true){
        counter++;
    }
    if(upper===true){
        counter++;
    }
    if(number===true){
        counter++;
    }
    if(symbol===true){
        counter++;
    }

    return counter;

}