document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const newToDo = document.querySelector('#new-task-description').value;
    const newLi = createToDo(newToDo);
    document.querySelector('#tasks').appendChild(newLi);
    form.reset();
  })

  function createToDo(todo){
    const li = document.createElement('li');
    li.textContent = `${todo} `;
    const btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.addEventListener('click', removeToDo)
    li.appendChild(btnX);
    return li;
  };

  function removeToDo(todo){
    todo.target.parentNode.remove();
  }
});