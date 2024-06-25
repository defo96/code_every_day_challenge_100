
const container = document.getElementById('container')
const input = document.getElementById('input')

console.log(input)
var textinput = 'popular'
affichemovie(textinput)

input.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter'){
    textinput = input.value
    console.log("input.innerText : ", input.value )
    affichemovie(textinput)
  }
})


function affichemovie(argument){
  const config = {methode : "GET" ,
    headers:{'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDVmMWIwOWNlN2ZlOTU0MWUwZTI0NTk2MTU2YmY5OSIsIm5iZiI6MTcxOTA4NjU0MC4zNzA2NTksInN1YiI6IjY2NzcxN2ViYmEzMzc4ZWJhNjIzMzBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zK8IoZ-Q3bhyf7XeUeDYWMv1zqyMk7QvnF-E6Bq5y44',
      'Accept': 'application/json'
        }
    }
  for( j = 1 ; j <=2 ; j++){ 
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${j}&sort_by=${argument}.desc`,config)
    //fetch(`https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&page=1&region=USA&year=${argument}`,config)
    .then((res) => res.json())
    .then((data) => {console.log(data)
         for(i=0; i< data.results.length ;i++){
           const divfilm = ` 
           <div class = "film" id="film">
             <div class="img">
               <img src="https://image.tmdb.org/t/p/w300/${data.results[i].poster_path}" alt="">
             </div>
             <div class="title">
               <p class="titletext">
                 ${data.results[i].title}
               </p>
               <div class="titlescore" id="score">
                
                 <p> ${data.results[i].vote_average} </p>

               </div>
             </div>
             <div class="overview">
               <h3> Overview </h3>
               <p> ${data.results[i].overview}</p>

             </div>
           </div>`
         container.innerHTML += divfilm
       }
    
     })
  }

}   
