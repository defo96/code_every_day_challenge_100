const input = document.querySelector('.input')
const todoList = document.querySelector('.container__todolist')





input.addEventListener('keyup', (e)=>{
  
  
    if(e.key === 'Enter' && input.value !== ''){
        const list = document.createElement('div')
          list.classList.add('list')
          list.innerHTML = `<p> ${input.value} </p>`
          todoList.appendChild(list)
          input.value = ''
    }
   
   let lists = todoList.querySelectorAll('.list');
  
    lists.forEach(todo => {
      todo.addEventListener('click', () => {
          todo.classList.toggle('active')
          console.log(todo)
        })
        todo.addEventListener('contextmenu', () => {
            todoList.removeChild(todo)
          })
    })
    
})



