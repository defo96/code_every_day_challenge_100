const header = document.querySelector('.header')

let scrollposition = window.scrollY

const header_height = header.clientHeight

document.addEventListener('scroll',()=>{
    let scrollposition = window.scrollY
    console.log(scrollposition, header.clientHeight)
    if(scrollposition > header.clientHeight + 10){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})




