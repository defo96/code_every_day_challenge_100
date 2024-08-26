const cellules = document.querySelectorAll('.container__cellule')

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

cellules.forEach(cellule =>{
    cellule.addEventListener("mouseenter",()=>{
        var color = getRandomColor()
        cellule.style.transitionDelay = '0s'
        cellule.style.backgroundColor =  `${color}`
    })
    cellule.addEventListener('mouseout',()=>{
        cellule.style.backgroundColor =  'gray'
        cellule.style.transitionDelay = '0.5s'
    })
})