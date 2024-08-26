const container = document.querySelector('.container')
const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};


async function pok(){
    for(let i=1; i<=152;i++){
        try{
            const pokemonResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const data = await pokemonResult.json();
            //recupération des éléments dans l'api
            const image = data.sprites.front_default
            const name = data.name
            let type = data.types[0].type.name

            if( type === 'normal'){
                type = data.types[1].type.name
            }

            let number
            if(i < 10 ){
                number = `#000${i}`
            }else if(i<100){
                number = `#00${i}`
            }else{
                number = `#0${i}`
            }
            //creation des cartes
            const cart = document.createElement('div')
                 cart.classList.add('poke')
                 cart.innerHTML = `
                 
                 <div class='pokeimage'></div>
                 <div class='pokenumber'> ${number} </div>
                 <div class='pokename'> ${name}</div>
                 <div class='poketype'> type: ${type}</div>`
            const pokeimage = cart.querySelector('.pokeimage')
            pokeimage.style.backgroundImage = `url(${image})`
            cart.style.backgroundColor = `${colours[type]}`

            //ajout de la carte dans le container
            container.appendChild(cart)
            
    
        }catch(error){
            console.error('il y a une erreur')
        }
    }
   
}
pok()