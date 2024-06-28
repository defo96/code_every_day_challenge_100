const carres = document.querySelectorAll('.carre')
 drop = document.getElementById('drop')

carres.forEach(car =>{
        car.addEventListener("dragstart", (e) => {
          
            setTimeout(() => drop.classList.add('dragstart'),10)
            drop.classList.add('dragstart1')
           });
        car.addEventListener('dragover', (e)=>{
             e.preventDefault()
            car.classList.add('dragging')
        })
        car.addEventListener('dragleave',()=>{
           
            car.classList.remove('dragging')
        })
        car.addEventListener('drop',()=>{
         
            //e.preventDefault()
            car.appendChild(drop)
            car.classList.remove('dragging')
            drop.classList.remove('dragstart')
            drop.classList.remove('dragstart1')

        })
})


  
