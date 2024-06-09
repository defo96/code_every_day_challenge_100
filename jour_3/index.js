const burguer = document.getElementById('burguer')
const croix = document.getElementById('croix')
const cercle = document.getElementById('cercle')
const main_principal = document.getElementById('main_principal')
const sociaux = document.getElementById('sociaux')
const sociau1 = document.getElementById('sociau1')
const sociau2 = document.getElementById('sociau2')
const sociau3 = document.getElementById('sociau3')


burguer.addEventListener('click', function(){
    console.log(burguer.style.position)
        cercle.style.rotate = '-45deg'
        croix.style.display = 'block'
        // burguer.style.display = 'none'
        main_principal.style.transform = 'rotate(-20deg)'
        sociaux.style.left = '3%'
        sociau1.style.left = '1%'
        sociau2.style.left = '15%'
        sociau3.style.left = '35%'

})
croix.addEventListener('click', function(){
    cercle.style.rotate = '3deg'
    // croix.style.display = 'none'
    // burguer.style.display = 'block'
    main_principal.style.transform = 'rotate(0deg)'
    sociaux.style.left = '0%'
    sociau1.style.left = '0%'
    sociau2.style.left = '0%'
    sociau3.style.left = '0%'

})

