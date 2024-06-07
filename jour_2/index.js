const next = document.getElementById('next')
const prev = document.getElementById('prev')

const etape   = document.getElementsByClassName('etape')
const trait = document.getElementsByClassName('trait')
const active = document.getElementsByClassName('active')



console.log(active.length>3)


console.log(trait[0])
next.addEventListener('click', () => {
      if(active.length === 3){
        next.style.backgroundColor = "white"
       }
       
       if(0<active.length && active.length<4){
        etape[active.length].classList.add('active')
        trait[active.length-2].classList.add('traitactif')
        etape[active.length].style.transition="border 5s ease-out"
        trait[active.length-2].style.transition=" background-color 2s ease-out"
       }
       if(active.length<4 && active.length>1){
        prev.style.backgroundColor = "green"
       }
        
       
      
})

prev.addEventListener('click', () => {
    if(active.length === 2){
        prev.style.backgroundColor = "white"
    }
    console.log(active.length)
    console.log(1< active.length && active.length<=4)
    if( 1< active.length && active.length<=4){
        etape[active.length-1].classList.remove('active')
        trait[active.length-1].classList.remove('traitactif')
        etape[active.length-1].style.transition="border 2s ease-out"
        trait[active.length-1].style.transition=" background-color 4s ease-out"
    }
   
    if(1 < active.length && active.length < 3){
        next.style.backgroundColor = "green"
    }
    
})
   

