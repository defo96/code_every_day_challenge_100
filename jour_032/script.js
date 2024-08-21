const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes[0].addEventListener('change',(e)=>{
    if(checkboxes[1].checked && checkboxes[2].checked && e.target.checked){
        checkboxes[1].checked = false
    }
})
checkboxes[1].addEventListener('change',(e)=>{
    if(checkboxes[0].checked && checkboxes[2].checked && e.target.checked){
        checkboxes[0].checked = false
    }
})
checkboxes[2].addEventListener('change',(e)=>{
    if(checkboxes[1].checked && checkboxes[0].checked && e.target.checked){
        checkboxes[1].checked = false
    }
})
