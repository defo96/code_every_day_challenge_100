const chevronFlech = document.querySelectorAll('.gg-chevron-right')
const chevronCroix = document.querySelectorAll('.fa-regular')
const response = document.querySelectorAll('.response')
const faq = document.querySelectorAll('.faq')



console.log(chevronFlech)
chevronFlech.forEach(function ajout(chevron,index){
  
    chevron.addEventListener('click', () =>{
          response[index].style.display = 'flex'
          faq[index].style. backgroundColor = '#fff'
          faq[index].style. boxShadow = '0px 0px 15px black'
          chevron.style.display = 'none'
          chevronCroix[index].style.display = 'flex'
    })
})
chevronCroix.forEach(function ajout(chevron,index){
  
    chevron.addEventListener('click', () =>{
          response[index].style.display = 'none'
          faq[index].style. backgroundColor = 'transparent'
          faq[index].style. boxShadow = '0px 0px 0px black'
          chevron.style.display = 'none'
          chevronFlech[index].style.display = 'flex'
    })
})