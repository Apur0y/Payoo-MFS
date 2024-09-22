//1. add event handeler, 2. preventDefault
const add = document.getElementById('add-btn')
add.addEventListener('click',function(){
    document.getElementById('add-money').classList.remove('hidden')
})

document.getElementById('confirm')
.addEventListener('click', function (event){

    event.preventDefault();
    
    const addMoneyInput= document.getElementById('add-money-input').value

    console.log(addMoneyInput)

    const pinNumber = document.getElementById('input-pin-number').value
    console.log(pinNumber)
    if(pinNumber==='123'){
       
        const currentBalance=parseFloat(addMoneyInput) + parseFloat( document.getElementById('main-balance').innerText)
        document.getElementById('main-balance').innerText = currentBalance

    }
    else{
        alert('sheet')
    }
})









