const button = document.getElementById('button')
const container = document.getElementById('container')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')


button.addEventListener('click',()=>{
    console.log(button)
   button.classList.toggle('activebutton')
   container.classList.toggle('activecontainer')
   minute.classList.toggle('activeminute')
   hour.classList.toggle('activehour')
})
let i =0
setInterval(function(){
    second.style.rotate =`${i}deg`
    i += 6
}, 1000)