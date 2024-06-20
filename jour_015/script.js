const reseaux = document.querySelectorAll('#reseau1')

valincrement1 = 0
valincrement2 = 0
valincrement3 = 0
var nom_exc_fun1 = 0
var nom_exc_fun2 = 0
var nom_exc_fun3 = 0

window.onload = function(){
    const arret1 = setInterval(() => {
         
        reseaux[0].innerText = `${valincrement1}`
        valincrement1 += 250
        if (nom_exc_fun1 === 50) {
          clearInterval(arret1)
        }
        nom_exc_fun1++
      },100)
      const arret2 = setInterval(() => {
         
        reseaux[1].innerText = `${valincrement2}`
        valincrement2 += 100
        if (nom_exc_fun2 === 50) {
          clearInterval(arret2)
        }
        nom_exc_fun2++
      },100)
      const arret3 = setInterval(() => {
         
        reseaux[2].innerText = `${valincrement3}`
        valincrement3 += 150
        if (nom_exc_fun3 === 50) {
          clearInterval(arret3)
        }
        nom_exc_fun3++
      },100)

}