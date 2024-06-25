const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg']

const souscontainer = document.getElementById('souscontainer')
const container = document.getElementById('container')
const left = document.getElementById('left')
const right = document.getElementById('right')

var i = 1 

right.addEventListener('click',()=>{
    if(i < 1){
        i = 1
    }
    if(i>=0 && i < images.length){
        souscontainer.innerHTML = `<img src = "/image/${images[i]}" alt="">`
        container.style.backgroundImage = `url(/image/${images[i]})`
        i++  
    }
})
left.addEventListener('click',()=>{
    if(i >= images.length ){
        i = images.length - 1 
    }
    if(i >=0 && i < images.length){
        souscontainer.innerHTML = `<img src = "/image/${images[i]}" alt="">`
        container.style.backgroundImage = `url(/image/${images[i]})`
        i--  
    }
   
})