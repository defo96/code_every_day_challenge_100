const profils = document.querySelector('.container__profil')
const search = document.getElementById('input')

search.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        console.log(search.value.toLowerCase())
        profils.innerHTML = ''
        research(search.value.toLowerCase())
    }
    if(search.value ===''&& e.key === 'Enter'){
        profils.innerHTML = ''
        console.log(search.value)
        genereprofil()
    }
})

if(search.value ===''){
    console.log(search.value)
    genereprofil()
}
async function genereprofil() {
    let lists = []
    for(let i = 0; i <50; i++){
    try{
        const profilResult = await fetch('https://randomuser.me/api')
        const profilData = await profilResult.json()

        //console.log(profilData)
        
        const profildiv = document.createElement('div')
        profildiv.classList.add('profil')
        profildiv.innerHTML = ` 
                <div class = "img">

                </div>
                <div class="nomAdress">
                    <p class="nom">${profilData.results[0].name.first} ${profilData.results[0].name.first} </p>
                    <p class="adress"> ${profilData.results[0].location.city}, ${profilData.results[0].location.country}</p>
                </div>
        `
        const imgdiv = profildiv.querySelector('.img')
        imgdiv.style.backgroundImage = `url(${profilData.results[0].picture.thumbnail})`
        imgdiv.style.backgroundPossition = 'center'
        imgdiv.style.backgroundRepeat = 'no-repeat'
        imgdiv.style.backgroundSize = 'cover'

        lists.push(profildiv)
        //console.log(lists)
        profils.appendChild(profildiv)
        
    }
    catch(error){
        console.error('cette erreur c\'est produit ' , error)
    }
       
    }
   
}







// search.addEventListener('keyup',(e)=>{
//     lists.forEach(list =>{
//         if(list.innerText.includes(search.value)){
//             profils.appendChild(list) 
//             console.log(list)
//         }
//         if(search.value === ''){
//             profils.appendChild(list)
//         }
//     })
// })

async function research(name){
    for(let i = 0; i <30; i++){
        try{ 
            const researchResult = await fetch(`https://randomuser.me/api/?gender=${name}`)
        const researchData = await researchResult.json()
    
        console.log(researchData)
        const profildiv = document.createElement('div')
            profildiv.classList.add('profil')
            profildiv.innerHTML = ` 
                    <div class = "img">
    
                      </div>
                    <div class="nomAdress">
                        <p class="nom">${researchData.results[0].name.first} ${researchData.results[0].name.first} </p>
                        <p class="adress"> ${researchData.results[0].location.city}, ${researchData.results[0].location.country}</p>
                    </div>
            `
            const imgdiv = profildiv.querySelector('.img')
            imgdiv.style.backgroundImage = `url(${researchData.results[0].picture.thumbnail})`
            imgdiv.style.backgroundPossition = 'center'
            imgdiv.style.backgroundRepeat = 'no-repeat'
            imgdiv.style.backgroundSize = 'cover'
            profils.appendChild(profildiv) 
        }
        catch(error){
            console.error('cette erreur c\'est produit ' , error)
        }
    }
    


}
//genereprofil()
//research('male')