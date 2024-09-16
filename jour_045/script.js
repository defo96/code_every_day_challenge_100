const faBars = document.querySelector('.fa-bars')
const faXmark = document.querySelector('.fa-xmark')

const slides = document.querySelectorAll('.slide')

function slideLeftZero(){
    var i = 0.3
    slides.forEach(slide =>{
        slide.style.transform = `translateX(0px)` 
        slide.style.transition = `${i}s`
        i += 0.3
    })
}
function slideLeft500(){
    var i = 1.2
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-700px)` 
        slide.style.transition = `${i}s`
        i -= 0.4 
    })
}
console.log(slides)
faBars.addEventListener('click', slideLeftZero)
faXmark.addEventListener('click',slideLeft500)