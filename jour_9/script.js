const audios = document.querySelectorAll('.audio')

const elementaudio = document.querySelectorAll('.son')

console.log(elementaudio)



audios.forEach((audio, index) =>{
    audio.addEventListener('click', function(){
        pause1()
        elementaudio[index].play()
    })
})
function pause1(){
    elementaudio.forEach((element) =>{
         element.pause()
         element.load()
    })
}
