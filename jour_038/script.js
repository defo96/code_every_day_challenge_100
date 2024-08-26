const photo = document.querySelector('.container__photo')
const home = document.querySelector('.container__bar-home')
const work = document.querySelector('.container__bar-work')
const blog = document.querySelector('.container__bar-blog')
const about = document.querySelector('.container__bar-aboutus')


photo.style.backgroundImage = 'url(pexels-thgusstavo-2102587.jpg)'
console.log(photo)

home.addEventListener('click',()=>{
    photo.style.backgroundImage = 'url(pexels-thgusstavo-2102587.jpg)'
})
work.addEventListener('click',()=>{
    photo.style.backgroundImage = 'url(pexels-divinetechygirl-1181605.jpg)'
})
blog.addEventListener('click',()=>{
    photo.style.backgroundImage = 'url(pexels-lum3n-44775-616849.jpg)'
})
about.addEventListener('click',()=>{
    photo.style.backgroundImage = 'url(pexels-workman-27670745.jpg)'
})