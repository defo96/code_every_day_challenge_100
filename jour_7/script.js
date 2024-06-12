const jeux = document.querySelectorAll('.jeu')


jeux.forEach(function(jeu){
            jeu.addEventListener('mouseenter', function(){
                remove()
                jeu.classList.add('active')
            })
})

function remove(){
    jeux.forEach(function(jeu){
        jeu.classList.remove('active')
    })
}