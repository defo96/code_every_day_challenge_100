const boxes = document.querySelectorAll('.box')
console.log(boxes)

window.addEventListener('scroll',checkBoxes)

checkBoxes()


function checkBoxes(){
    const triggerBottom = window.innerHeight/ 6 * 4
    
    boxes.forEach(box =>{
        var boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}



