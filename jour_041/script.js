const inputTable = document.querySelectorAll('.input')
const number = ['0','1','3','2','4','5','6','7','8','9']

// inputTable.forEach((input,idx) => {
//     input.addEventListener('keyPress',()=>{
//         inputTable[idx+1].style.focus = true
//     })
// })
inputTable.forEach((input, idx) => {
    input.addEventListener('keyup', (e) => {
        if(!(number.includes(e.key))){
            inputTable[idx].value = ''
        }
      if (number.includes(e.key) && idx < inputTable.length - 1) { // Check if there's a next input
        
        inputTable[idx + 1].focus();
        inputTable[idx].style.borderTop = '2px solid steelblue' 
        inputTable[idx].style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.205)' 
      }
      if(e.key === 'Backspace' && idx >= 0){
        if(inputTable[idx].value === ''){
            inputTable[idx - 1].focus();
            inputTable[idx].style.borderTop = '1px solid rgba(128, 128, 128, 0.651)'
            inputTable[idx].style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.205)'
         }
        
      }
      if(inputTable[idx].value !== ''){
        inputTable[idx].value = e.key
      }
    });
  });