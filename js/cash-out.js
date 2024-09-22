

document.getElementById('cash-out')
.addEventListener('click', function (event){

    event.preventDefault();
    
    const outMoneyInput= document.getElementById('out-money-input').value

    console.log(outMoneyInput)

    const pinNumber = document.getElementById('out-pin-number').value
    console.log(pinNumber)
    if(pinNumber==='123'){
       
        const currentBalance= parseFloat( document.getElementById('main-balance').innerText) - parseFloat(outMoneyInput);
        document.getElementById('main-balance').innerText = currentBalance

    }
    else{
        alert('sheet')
    }
})









