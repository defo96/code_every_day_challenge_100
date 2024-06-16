
const blague = document.getElementById('blague')
const button = document.getElementById('button')

fetch("https://icanhazdadjoke.com/", {method: "GET", headers : 
    {'Accept' :"text/plain"}, 
})
.then(response => response.text())
.then(response => blague.textContent = response)
.catch(error => alert("Erreur : " + error))


button.addEventListener('click', () => {
    fetch("https://icanhazdadjoke.com/", {method: "GET", headers : 
        {'Accept' :"text/plain"}, 
    })//fetch() renvoie une promesse. Lorsque nous aurons reçu
    // une réponse du serveur, le gestionnaire then() de la
    // promesse sera appelé avec la réponse
    .then(response => response.text())//si la requête a réussi, le gestionnaire récupère
    // la réponse sous forme de texte en appelant response.text(),
    // Et renvoie immédiatement la promesse renvoyée par response.text().
    .then(response => blague.textContent = response)//Quand response.text() a réussi, son gestionnaire `then()` est
    // appelé avec le texte et nous copions celui-ci dans la boîte
    // blague.
    .catch(error => blague.textContent = `Erreur lors de la récupération du text vers https://icanhazdadjoke.com/`)//On intercepte les éventuelles erreurs et on affiche un message
    // dans la boîte `blague`.
})




