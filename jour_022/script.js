const plus = document.getElementById('plus')
const moins = document.getElementById('moins')
const valeur = document.getElementById('valeur')
const container = document.querySelector('.container')
const divbleu = document.querySelector('.bleu')
const buttonreset = document.querySelector('.buttonreset')

// initailisation du canvas
const canvas = document.querySelector('.myCanvas')
console.log(divbleu.offsetHeight)
const width = canvas.width = container.offsetWidth
const height = canvas.height = container.offsetHeight - divbleu.offsetHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'rgb(245,245,245)'
ctx.fillRect(0,0,width,height)


const colorPicker = document.querySelector('input[type="color"]');

let colorPickerValue = colorPicker.value



var val = parseInt(valeur.innerText)


plus.addEventListener('click',()=>{
    val += 1
    valeur.innerText = `${val}`
})
moins.addEventListener('click',()=>{
    if(val > 1){
        val -= 1
        valeur.innerText = `${val}`
    }
})

let curX
let curY
let pressed = false
let isMouseDown = false
let startX, startY


container.addEventListener('mousemove', (e)=>{
    curX = e.clientX - container.getBoundingClientRect().left    
    curY = e.clientY - container.getBoundingClientRect().top 
  })
canvas.addEventListener('mousedown', () => {
    
    pressed = true
   
})

canvas.addEventListener('mouseup', () => {
    pressed = false
})

buttonreset.addEventListener('click', () => {
  ctx.fillStyle = 'rgb(245,245,245)'
  ctx.fillRect(0,0,width,height)
});

// covert degrees to radians
function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };

  // on desine

function draw() {
    if (pressed) {
      ctx.fillStyle = colorPicker.value
      ctx.beginPath()
      ctx.arc(curX, curY, val, degToRad(0), degToRad(360), false)
      ctx.fill()
    }
  
    requestAnimationFrame(draw)//fait l'animation
  }
  
  draw()