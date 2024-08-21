//gestion des diapos
const slider = document.querySelector(".container__image_1")
const size = 25

// let counter = 0


// const prev = document.querySelector(".container__boutton-prev")
// const next = document.querySelector(".container__boutton-next")
// const diapos = document.querySelector(".container__image")
// console.log("counter",counter)


// next.addEventListener("click", (e)=>{
//     counter++;
//     console.log("size*counter",slider.clientWidth)
//     if(counter>=0 && counter<=3){
//         diapos.style.transform = " translateX("+"-"+(size*counter) + "px)"
//     }else{
//         counter--;
//     }
// })
// prev.addEventListener("click",()=>{
//     /* if(counter>0){
         
      
//         counter-=2
//         if(counter<0)
//           {
//             counter = 0
//           }
//         diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
//         console.log("size*counter",size*counter)
//         console.log("counter",counter)
//     } */
//     counter--;
//     if(counter>=0 && counter<=3){
//         diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
//     }else{
//         counter++;
//     }
// })





const bouton_up = document.querySelector('.container__boutton-next')
const bouton_down = document.querySelector('.container__boutton-prev')

const images = document.querySelector('.container__image')
const text = document.querySelector('.container__text')
let i = 1
let j = 3
let k = i 
let p = 3
let k1 = p
bouton_up.addEventListener('click', ()=>{
    console.log('i = ', i)
    if(i>=1 && i<=3){
        images.style.transform = `translate(${-i*size}vw,0)`
        //text.style.transform = `translate(${-(p-1)*size,0}vh)`
        p-- 
        i++
        //p = j - i 
        k=i
    }else{
        images.style.transform = `translate(0,0)`
        //text.style.transform = `translate(0,-300vh)`
       
        k++
        console.log('k = ',k)
    }
    if(k === 5){
        i = 1
        p=3
        k1 = 3
    }
})

bouton_down.addEventListener('click', ()=>{
       //console.log(p,i)
    if(p>=0 && p<=2){
        images.style.transform = `translate(${-(i-2)*size}vw,0)`
        //text.style.transform = `translate(0,${-(p+1)*100}vh)`
        p++
        i--
        k1 = p
    }else{
        images.style.transform = `translate(${-3*size}vw,0)`
       // text.style.transform = `translate(0,0)`
        k1++
        console.log('k1 = ',k1)
    }
    if(k1 === 4){
        i = 4
        p = 0
        k = 4

    }
})