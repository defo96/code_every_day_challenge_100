const image = document.getElementsByClassName('image')
const text = document.getElementsByClassName('p')

console.log(text)


image[0].addEventListener('click', () => {
    console.log(image)
    // Modifier les propriétés CSS après le survol
    //image[0].style.animation = "trans-vers-gauche 5s linear normal"
    
        text[0].style.display = 'block'
        text[1].style.display = 'none'
        text[2].style.display = 'none'
        text[3].style.display = 'none'
        text[4].style.display = 'none'
        image[0].style.width = '50vw'
        image[1].style.width = '5vw'
        image[2].style.width = '5vw'
        image[3].style.width = '5vw'
        image[4].style.width = '5vw'
})
  
// image[0].addEventListener('mouseout', () => {
//     // Réinitialiser les propriétés CSS après le survol
//     if(image[0].style.width == '50vw'){
//       image[0].style.width = '50vw'
//     }else{
//       image[0].style.width = '5vw'
//     }
// })

image[1].addEventListener('click', () => {
    console.log(image)
    // Modifier les propriétés CSS après le survol
    //image[1].style.animation = "trans-vers-gauche 5s linear normal"
    text[0].style.display = 'none'
    text[1].style.display = 'block'
    text[2].style.display = 'none'
    text[3].style.display = 'none'
    text[4].style.display = 'none'
    image[0].style.width = '5vw'
    image[1].style.width = '50vw'
    image[2].style.width = '5vw'
    image[3].style.width = '5vw'
    image[4].style.width = '5vw'
   
    
  })
  // image[1].addEventListener('mouseout', () => {
  //   // Réinitialiser les propriétés CSS après le survol
  //   if(image[1].style.width == '50vw'){
  //     image[1].style.width = '50vw'
  //   }else{
  //     text[1].style.display = 'none'
  //     image[1].style.width = '5vw'
  //   }
    
  // })
  image[2].addEventListener('click', () => {
    console.log(image)
    // Modifier les propriétés CSS après le survol
    //image[2].style.animation = "trans-vers-gauche 5s linear normal"
    text[0].style.display = 'none'
    text[1].style.display = 'none'
    text[2].style.display = 'block'
    text[3].style.display = 'none'
    text[4].style.display = 'none'
    image[0].style.width = '5vw'
    image[1].style.width = '5vw'
    image[2].style.width = '50vw'
    image[3].style.width = '5vw'
    image[4].style.width = '5vw'
   
    
  })
  
// image[2].addEventListener('mouseout', () => {
//     // Réinitialiser les propriétés CSS après le survol
//     if(image[2].style.width == '50vw'){
//       image[2].style.width = '50vw'
//     }else{
//       image[2].style.width = '5vw'
//     }
    
//   })
  image[3].addEventListener('click', () => {
    console.log(image)
    // Modifier les propriétés CSS après le survol
    //image[3].style.animation = "trans-vers-gauche 5s linear normal"
    text[0].style.display = 'none'
    text[1].style.display = 'none'
    text[2].style.display = 'none'
    text[3].style.display = 'block'
    text[4].style.display = 'none'
    image[0].style.width = '5vw'
    image[1].style.width = '5vw'
    image[2].style.width = '5vw'
    image[3].style.width = '50vw'
    image[4].style.width = '5vw'
   
    
  })
  
// image[3].addEventListener('mouseout', () => {
//     // Réinitialiser les propriétés CSS après le survol
//     if(image[3].style.width == '50vw'){
//       image[3].style.width = '50vw'
//     }else{
//       image[3].style.width = '5vw'
//     }
    
//   })
  image[4].addEventListener('click', () => {

    text[0].style.display = 'none'
    text[1].style.display = 'none'
    text[2].style.display = 'none'
    text[3].style.display = 'none'
    text[4].style.display = 'block'
   
    image[0].style.width = '5vw'
    image[1].style.width = '5vw'
    image[2].style.width = '5vw'
    image[3].style.width = '5vw'
    image[4].style.width = '50vw'
   
    
  })
  
// image[4].addEventListener('mouseout', () => {
//     // Réinitialiser les propriétés CSS après le survol
//     if(image[4].style.width == '50vw'){
//       image[4].style.width = '50vw'
//     }else{
//       image[4].style.width = '5vw'
//     }
       
    
//   })