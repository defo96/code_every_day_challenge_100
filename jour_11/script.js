const chargement = document.getElementById('chargement')
const eventkey = document.getElementById('eventkey')
const eventkeycode = document.getElementById('eventkeycode')
const evencode = document.getElementById('eventcode')
const keycode = document.getElementById('keycode')


window.addEventListener('keydown',(event)=>{
    chargement.style.display = 'none'
    keycode.style.display = 'flex'
    eventkey.innerText = event.key
    eventkeycode.innerText = event.keyCode
    eventcode.innerText = event.code
})
