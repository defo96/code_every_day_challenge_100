const label = document.getElementById('label')
const range = document.getElementById('range')

var rangeValeur = range.value
console.log(range.value)

range.addEventListener('input',()=>{
    rangeValeur = range.value
    label.innerText = `${range.value}`
    // label.style.left = `${range.value*3 - 20}px`
    if(range.value <= 50){
        label.style.transform = `translateX(${range.value*3-20+7.5}px)`
    }else{
        label.style.transform = `translateX(${range.value*3-20-7.5}px)`
    }
    
    console.log(range.value)
})
