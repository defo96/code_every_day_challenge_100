const sous_contener = document.getElementsByClassName('sous_contener')
const left = document.getElementsByClassName('left')
const rigth = document.getElementsByClassName('rigth')

console.log(sous_contener[0])

console.log(window.scrollY)
let sous_contenerstyle0 = window.getComputedStyle(sous_contener[0])
let valeurheight = sous_contenerstyle0.getPropertyValue('height')
let height = parseInt(valeurheight)
console.log(height)

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 100){
        left[0].style.translate = '0px'
    }
    if(this.window.scrollY < 100){
        left[0].style.translate = '-60vw'
    }
    if(this.window.scrollY > 320){
        rigth[0].style.translate = '0px'
    }
    if(this.window.scrollY < 320){
        rigth[0].style.translate = '60vw'
    }
    if(this.window.scrollY > 540){
        left[1].style.translate = '0px'
    }
    if(this.window.scrollY < 540){
        left[1].style.translate = '-60vw'
    }
    if(this.window.scrollY > 760){
        rigth[1].style.translate = '0px'
    }
    if(this.window.scrollY < 760){
        rigth[1].style.translate = '60vw'
    }
    if(this.window.scrollY > 980){
        left[2].style.translate = '0px'
    }
    if(this.window.scrollY < 980){
        left[2].style.translate = '-60vw'
    }
  });
