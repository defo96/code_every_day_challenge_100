const showNotif = document.querySelector('.container__notif')
const listNotif = document.querySelector('.container_listNotif')

let i = 0

showNotif.addEventListener('click', ()=>{
    const notif = `message${i}`
    getRandomColor()
    newNotif(notif)
    addNotif(notif)
    i++
    console.log(listNotif.firstChild)
})

setInterval(()=>{listNotif.firstChild.remove()},5000)

console.log(listNotif.firstChild)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function newNotif( notification ){
    const notif = document.createElement('div')
    notif.innerText = notification
    notif.classList.add('container_listNotif-notif')
    notif.style.color = getRandomColor()
    return notif
}

function addNotif(notification){
    const notif = newNotif(notification)
    listNotif.appendChild(notif)
}

// function removeNotif(){
//     listNotif.removeChild(listNotif.firstChild)
// }
