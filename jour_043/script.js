const emogies = document.querySelectorAll('.emogie')
const emogiesText = document.querySelectorAll('.emogie__satisfied')
const reponse = document.querySelector('.reponse')
const container = document.querySelector('.container')
const btn = document.querySelector('.container__btn')

const feeback = document.querySelector('.feedback')
console.log(emogies)

function removeActive(){
    emogies.forEach(emogie =>{
        emogie.classList.remove('active')
    })
}

emogies.forEach((emogie,idx) =>{
    emogie.addEventListener('click',()=>{
        removeActive()
        emogie.classList.add('active')
        
        btn.addEventListener('click',()=>{
            feeback.innerHTML = `Feedback : ${emogiesText[idx].innerText}`
            container.style.display = 'none'
            reponse.style.display = 'flex' 

        })
    })
    
})