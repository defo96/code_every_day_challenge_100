const boutton = document.getElementById('button')
const research = document.getElementById('research')

//recuperation du prmier enfant de research
const firstchild = research.firstChild


//initialisation de la variale qui contient les style(valeur) de research
const computedStyle = window.getComputedStyle(research);

//creation de la balise input
var input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Search...'


boutton.addEventListener('click', function(){
    console.log(research.style)
    if(computedStyle.getPropertyValue('width') === '45px'){
        research.style.width = '350px'
        research.appendChild(input)
    }
    if(computedStyle.getPropertyValue('width') === '350px'){
        research.style.width = '45px'
    }   
})
