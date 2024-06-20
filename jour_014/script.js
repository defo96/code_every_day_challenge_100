const trait = document.getElementById('trait')
const traithaut = document.getElementById('traithaut')
const traitbas = document.getElementById('traitbas')
const nav = document.getElementById('nav')





console.log(traithaut)
trait.addEventListener('click', ()=> {
    console.log(trait)
   console.log(nav.classList.toggle('active'))
    var nom_exc_fun = 0
    function rotation1div(degree){
        
        traitbas.style.transform = `rotate(${degree}deg)`
        traithaut.style.transform = `rotate(-${degree}deg)`
        
    }
    var i = 60
    const arret1 = setInterval(() => {
         
        rotation1div(i)
        if (nom_exc_fun === 10) {
          clearInterval(arret1)
        }
        i+=60
        nom_exc_fun++
        console.log(nom_exc_fun)
      },100)
    
    
    console.log(nom_exc_fun)
  
   // const arret2 = setInterval(rotation2div(traitbas),12)

})