const bouton_up = document.querySelector('.bouton-up')
const bouton_down = document.querySelector('.bouton-down')

const images = document.querySelector('.container__images')
const text = document.querySelector('.container__text')
let i = 1
let j = 3
let k = i 
let p = 3
let k1 = p
bouton_up.addEventListener('click', ()=>{
    console.log('i = ', i)
    if(i>=1 && i<=3){
        images.style.transform = `translate(0,${-i*100}vh)`
        text.style.transform = `translate(0,${-(p-1)*100}vh)`
        p-- 
        i++
        //p = j - i 
        k=i
    }else{
        images.style.transform = `translate(0,0)`
        text.style.transform = `translate(0,-300vh)`
       
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
        images.style.transform = `translate(0,${-(i-2)*100}vh)`
        text.style.transform = `translate(0,${-(p+1)*100}vh)`
        p++
        i--
        k1 = p
    }else{
        images.style.transform = `translate(0,-300vh)`
        text.style.transform = `translate(0,0)`
        k1++
        console.log('k1 = ',k1)
    }
    if(k1 === 4){
        i = 4
        p = 0
        k = 4

    }
})

