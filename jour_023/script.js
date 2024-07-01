const trianglehaut = document.getElementById('trianglehaut')
const trianglebas = document.getElementById('trianglebas')





function rotate(div){
    var i 
      div.style.rotate = `${i}deg`
      i += 127
}
var i = 0
var j = 0
//rotate(trianglehaut)
//rotate(trianglebas)
setInterval(()=>{
    trianglehaut.style.rotate = `${i}deg`
      i += 127
},1000)

setInterval(()=>{
    trianglebas.style.rotate = `${j}deg`
      j += 127
},1000)

// setTimeout(()=>{
//     trianglebas.style.rotate = `${j}deg`
//       j += 127
// }, 1000)