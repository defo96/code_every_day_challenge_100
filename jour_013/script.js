const textarea = document.getElementById('myTextarea')// reccuperation du textarea
const choix = document.getElementById('choices')//reccperation de la div choices
const valeur = new Set(['a','z','e','r','t','y','u','i','o','p','q','s','d',
    'f','g','h','j','k','l','m','w','x','c','v','b','n','0','1','2',
    '3','4','5','6','7','8','9','A','Z','E','R','T','Y','U','I','O','P',
'Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N'])//valeur possible du contenu de textarea
    
//creation d'une div
function creation(){
    var saisi = document.createElement('div')
    saisi.classList.add('active')
    return saisi
}
//ajout d'une valeur dans la div
function ajoutValeurdiv(div,val){
    div.innerHTML += val
}
//genere une valeur aleatoire
function aleatoire(max){
        return Math.floor(Math.random() * max)
}

var nombreIteration = 0//initialisation du nombre de fois où la fonction colordiv()


saisi = creation()//instatiation d'une div

textarea.addEventListener('keydown',(event)=>{
    if(valeur.has(event.key)){
        ajoutValeurdiv(saisi,event.key)
        choix.appendChild(saisi)
    }
    // if(event.key === "Backspace"){
    //     if(textarea.innerText !== ","){
    //         const currentText = saisi.innerText
    //         const newText = currentText.substring(0, currentText.length - 1)
    //         saisi.innerText = newText
    //         console.log(saisi.innerText)
    //         if(saisi.innerText === ""){
    //             choix.removeChild(saisi)
    //             saisi = choix.lastChild
    //         }
    //     }
        
    // }
    if(event.key === 'Enter'){
        textarea.value = ''
        textarea.blur()
        const actives = document.querySelectorAll('.active')
        //fonction d'ajout aleatoire du background d'une div
        function colordiv(){
            var i = aleatoire(actives.length)
            console.log(actives[i])
            actives.forEach(active =>{
                active.style.backgroundColor = 'antiquewhite'
            })
            actives[i].style.backgroundColor = 'blue'
            nombreIteration += 1
            if(nombreIteration === 40){
                clearInterval(arretExecution)
            }
        }
        
        const arretExecution = setInterval(colordiv,200)

    }

    if(event.key === ","){
        saisi = creation()
    }
})