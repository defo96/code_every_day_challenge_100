const smallcups = document.querySelectorAll('.smallcup')
const paragraph = document.getElementById('paragraph')
const bigcup = document.getElementById('bigcup')
const active = document.getElementById('active')   


var i 

smallcups.forEach((smallcup,index)=>{
    smallcup.addEventListener('click',()=>{
      
            active.style.height = `${12.5*(index + 1)}%`
            active.innerHTML = `${12.5*(index + 1)}%`
           
            paragraph.innerText = `${2-(0.25*(index+1))} L remained`
            paragraph.style.height = `${100 - 12.5*(index + 1)}%`
            paragraph.style.borderRadius = "0px 0px 0px 0px"

          for (  i = 0 ; i <= index ; i++){
               smallcups[i].style.backgroundColor = "slateblue"
               smallcups[i].style.color = "white"
          }
          for (  i = index+1  ; i <= smallcups.length-1 ; i++){
            smallcups[i].style.backgroundColor = "white"
             smallcups[i].style.color = "slateblue"
       }
          
    })
})