const rotate = document.querySelector('.container__rotate')
const go = document.querySelector('.container__go')
const btn = document.querySelector('.btn')



let timeMin = 0 
let timeMax = 4

console.log(rotate.classList.contains('active'))

if(!rotate.classList.contains('active')){
    const time = setInterval(()=>{
        go.classList.toggle('active')
        rotate.classList.toggle('active')
        console.log(time)
        timeMin += 4
        if(timeMin === timeMax){
            clearInterval(time)
        }
    }, 4000)
}

btn.addEventListener('click',()=>{
    
   location.reload()
    
})

// const rotateElement = document.querySelector('.container__rotate')
// const goElement = document.querySelector('.container__go')
// const btnElement = document.querySelector('.btn')

// let isRotating = false
// let rotationInterval

// btnElement.addEventListener('click', () => {
//   if (!isRotating) {
//     isRotating = true

//     const rotationInterval = setInterval(() => {
//       goElement.classList.toggle('active')
//       rotateElement.classList.toggle('active')

//       console.log('Rotation in progress...')

//       // Check if the rotation duration has elapsed
//       if (timeMin >= timeMax) {
//         clearInterval(rotationInterval)
//         isRotating = false
//       }

//       timeMin += 4; // Assuming timeMin represents seconds
//     }, 4000)
//     }
  
// });