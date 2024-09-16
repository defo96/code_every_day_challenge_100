const container = document.querySelector('.container')


const query = 'dogs'
const clientId = 'WepyqeqMZoUQHrCqHqt4Q1XCYAC4HZgWR01VJ64s-wM'

//const url = `https://api.unsplash.com/search/photos?page=${1}&query=${query}&client_id=${clientId}`


async function randomImage(){
    try{
        const rand = 1
        const imageFetch = await fetch(`https://api.unsplash.comsearch/photos?page=${rand}&query=${query}&client_id=${clientId}`)
        const imageData = await imageFetch.json()
        for(let i=0; i<= 10 ; i++){
            container.innerHTML += `<img src="${imageData.results[i].links.download}" alt="">`
        }  
    }catch(error){
        console.log('voici l\'erreur', error)
    }
    
}
randomImage()


  
  