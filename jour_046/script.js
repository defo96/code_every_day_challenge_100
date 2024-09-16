
const resultatBtn = document.querySelector('.resultat__btn')
const resultat = document.querySelector('.resultat')
const resultatText = document.querySelector('.resultat__text')
const containerQuestion = document.querySelectorAll('.container__question')
const inputRadios = document.querySelectorAll('input[type = radio]')

var note = 0

document.addEventListener('DOMContentLoaded',()=>{
    inputRadios.forEach(inputRadio =>{
        inputRadio.checked = false 
    })

})
containerQuestion.forEach((form,idx) =>{
   form.addEventListener(
    "submit",
    function (event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        if(entry[1] === 'true'){
            note++
        }
      }
      //log.innerText = output;
      event.preventDefault();
      console.log(output);
      if(idx < containerQuestion.length-1){
        containerQuestion[idx].classList.remove('active')
        containerQuestion[idx+1].classList.add('active')
      }else{
        containerQuestion[idx].classList.remove('active')
        resultatText.innerText = `You answered ${note}/${containerQuestion.length} questions correstly`
        resultat.classList.add('active')
      }
      
    },
    false,
  ); 
})

// document.addEventListener('DOMContentLoaded', ()=>{
//     tableauPropositions.forEach((elements) =>{
//         elements.forEach(element =>{
//             element.checked = false 
//         })
//     })
// })

resultatBtn.addEventListener('click',()=>{
    
    location.reload()
})
