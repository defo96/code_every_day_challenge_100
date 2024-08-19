const textMov = document.querySelector('.text-mov')
const speed = document.getElementById('speed')



const text = 'We Love Programing !'

var speedValue = parseInt(speed.value)


var i = 0

// text.split('').forEach(element => {
//         setInterval(() => {textMov.innerHTML += `<span> ${element} </span>`},2000)

//     })
speed.addEventListener('change',()=>{
    speedValue = parseInt(speed.value)
})

setInterval(() => {
    if(i < text.length){
        textMov.innerHTML += `<span>${text.split('')[i]}</span>`
    }else{
        textMov.innerHTML = ''
        i = -1
    }
i++},100/speedValue)


// function ajoutLettre(char){
//     textMov.innerText += char
// }
