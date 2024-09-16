const tableauProfil = [
    {
        text:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
        "Sequi officiis repellat debitis soluta rem fugit, nulla necessitatibus"  + 
        "inventore in veritatis deleniti minus possimus, dolor explicabo. Consectetur," +
         "nisi! Nobis, aperiam rerum!" +
        "Temporibus rem magnam et ad quam, ducimus delectus officia "+
        "at tempora, laboriosam perferendis excepturi? Perferendis,"+ 
        "eligendi temporibus dignissimos repudiandae, ipsa ex minima"+ 
        "qui alias illo, quia velit vero debitis repellendus!",
        nom: " profil1",
        profession : "Front End",
        imageProfil : "pexels-divinetechygirl-1181605.jpg"
    },
    {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
        "Sequi officiis repellat debitis soluta rem fugit, nulla necessitatibus"  + 
        "inventore in veritatis deleniti minus possimus, dolor explicabo. Consectetur," +
         "nisi! Nobis, aperiam rerum!" +
        "Temporibus rem magnam et ad quam, ducimus delectus officia "+
        "at tempora, laboriosam perferendis excepturi? Perferendis,"+ 
        "eligendi temporibus dignissimos repudiandae, ipsa ex minima"+ 
        "qui alias illo, quia velit vero debitis repellendus!",
        nom: " profil2",
        profession : "Back End",
        imageProfil : "pexels-lum3n-44775-616849.jpg"
    },
    {
        text:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
        "Sequi officiis repellat debitis soluta rem fugit, nulla necessitatibus"  + 
        "inventore in veritatis deleniti minus possimus, dolor explicabo. Consectetur," +
         "nisi! Nobis, aperiam rerum!" +
        "Temporibus rem magnam et ad quam, ducimus delectus officia "+
        "at tempora, laboriosam perferendis excepturi? Perferendis,"+ 
        "eligendi temporibus dignissimos repudiandae, ipsa ex minima"+ 
        "qui alias illo, quia velit vero debitis repellendus!",
        nom: " profil3",
        profession : "Data Scientist",
        imageProfil : "pexels-thgusstavo-2102587 copy.jpg"
    },
    {
        text:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
        "Sequi officiis repellat debitis soluta rem fugit, nulla necessitatibus"  + 
        "inventore in veritatis deleniti minus possimus, dolor explicabo. Consectetur," +
         "nisi! Nobis, aperiam rerum!" +
        "Temporibus rem magnam et ad quam, ducimus delectus officia "+
        "at tempora, laboriosam perferendis excepturi? Perferendis,"+ 
        "eligendi temporibus dignissimos repudiandae, ipsa ex minima"+ 
        "qui alias illo, quia velit vero debitis repellendus!",
        nom: " profil4",
        profession : "UI/UX",
        imageProfil : "pexels-thgusstavo-2102587.jpg"
    },
    {
        text:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
        "Sequi officiis repellat debitis soluta rem fugit, nulla necessitatibus"  + 
        "inventore in veritatis deleniti minus possimus, dolor explicabo. Consectetur," +
         "nisi! Nobis, aperiam rerum!" +
        "Temporibus rem magnam et ad quam, ducimus delectus officia "+
        "at tempora, laboriosam perferendis excepturi? Perferendis,"+ 
        "eligendi temporibus dignissimos repudiandae, ipsa ex minima"+ 
        "qui alias illo, quia velit vero debitis repellendus!",
        nom: " profil5",
        profession : "Testeur",
        imageProfil : "pexels-workman-27670745.jpg"
    }
]

let profilText = document.querySelector('.text')
let profilImg = document.querySelector('.img')
let profilName = document.querySelector('.name')
let profilProfession = document.querySelector('.profession')

var i = 0
profil(tableauProfil)
setInterval(()=>{
    i++
    if(i<= tableauProfil.length - 1){
       profil(tableauProfil) 
    }
    if(i === tableauProfil.length - 1){
        i = -1
    }
},10000)
function profil(tableau){
    
        profilImg.innerHTML = `<img src="${tableau[i].imageProfil}" alt="">`
        profilText.innerText = tableau[i].text
        profilName.innerText = tableau[i].nom
        profilProfession.innerText = tableau[i].profession 
      
}


