document.getElementById('add-btn').addEventListener('click',function(){
 
    const addBtn = document.getElementById('add-money')
    addBtn.classList.remove('hidden')
    const outBtn = document.getElementById('out-cash')
    outBtn.classList.add('hidden')

})

document.getElementById('out-btn').addEventListener('click',function(){
 
    const addBtn = document.getElementById('add-money')
    addBtn.classList.add('hidden')
    const outBtn = document.getElementById('out-cash')
    outBtn.classList.remove('hidden')

})




