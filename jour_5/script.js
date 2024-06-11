const span = document.getElementById('span')//recuperation de l id span
const background = document.getElementById('background')//recuperation de l id background
const paragraphe = document.getElementById('p')//recuperation de l id p

// recuperation de la valeur du blur de la div background sans px
let backgroundstyle = window.getComputedStyle(background)// recuperation du style de la div background
let valeurblur = backgroundstyle.getPropertyValue('filter')//recuperation de la valeur du filter
let valeur = parseInt(valeurblur.split('(')[1].split(')')[0])//recuperation de la valeur du blur sans px


let i = 1
//chargement de la page
window.onload = function(){
    function chargement(){
        //incrementation de la valeur du span
        span.innerText = parseInt(span.innerText) + 1
        console.log(parseInt(span.innerText))
        valeur = valeur-0.3
        //changement du blur dans le background
        background.style.filter = `blur(${valeur}px)`
        //chargement de l'opacite du paragraphe
        paragraphe.style.opacity = `${i}`
        i = i - 0.01
        if ( valeur < 0){
            //arret du setInterval
            clearInterval(nbre_repetition)
        }
    }
    //repetition de la fonction avec setIntervale
   const nbre_repetition = setInterval(chargement,50)
}
