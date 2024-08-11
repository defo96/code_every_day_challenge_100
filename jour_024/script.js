container__image = document.querySelector('.container__image')
container__text_p1 = document.querySelector('.container__text-p1')
container__text_p2 = document.querySelector('.container__text-p2')
container__profil_image = document.querySelector('.container__profil-image')
container__profil_text_p1 = document.querySelector('.container__profil-text-p1')
container__profil_text_p2 = document.querySelector('.container__profil-text-p2')

setTimeout(()=>{
container__image.style.backgroundImage = "url('pexels-mustafa-akkus-19936388-9393252.jpg')"
container__image.style.backgroundSize = "cover"
container__image.style.backgroundPosition = "center"
container__image.style.backgroundRepeat = "no-repeat"


container__profil_image.style.backgroundImage = "url('pexels-mustafa-akkus-19936388-9393252.jpg')"
container__profil_image.style.backgroundSize = "cover"
container__profil_image.style.backgroundPosition = "center"
container__profil_image.style.backgroundRepeat = "no-repeat"


container__text_p1.innerText = 'Loren ipsum dolor sit amet'
container__text_p1.classList.remove('container__text-p1-active')
container__text_p2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
container__text_p2.classList.remove('container__text-p2-active')

container__profil_text_p1.innerText = 'Mabou Sommet'
container__profil_text_p1.classList.remove('container__profil-text-p1-active')
container__profil_text_p2.innerText = 'Oct 8, 2020'
container__profil_text_p2.classList.remove('container__profil-text-p2-active')

},800)

