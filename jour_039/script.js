const container = document.querySelector('.container')
const container__img = document.querySelector('.container__img')
const password = document.getElementById('password')


let i =0

password.addEventListener('keydown', (e)=>{
    console.log(e.key)
     if(e.key !== 'Backspace'){
        container__img.style.filter = `blur(${10 - i}px)` 
        i++
        console.log(i)
       // console.log(password)
    }
    if(e.key === 'Backspace'){
           if (password.value.length > 0) {
                i--
                
                console.log('i--=', i)
                container__img.style.filter = `blur(${10 - i}px)`
                password.innerText = password.value.slice(0, -1)
                console.log(password.value)
            }
          
        // e.preventDefault();

        // password.value = password.value.slice(0, -1)
        // console.log(e.key)
    }
//    if(i > 8){
//     i=8
//    }
//    if(i < 0){
//     i=0
//    }

    
})

