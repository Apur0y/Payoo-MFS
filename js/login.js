 document.getElementById('button-login').addEventListener('click', function(event){

     event.preventDefault()
    console.log('Btn was clicked')

    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)

    const pinNumber = document.getElementById('pin-number').value
          console.log(pinNumber)


          if(phoneNumber=== '5' && pinNumber==='123'){
            console.log('LogedIn')
            window.location.href = '/home.html'
          }
          else{
            alert('wrong pin')
          }
 })