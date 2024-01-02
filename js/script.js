// Seleção de elementos
  const addForm = document.querySelector('#addForm');
  const addInput = document.querySelector('#toDoInput');
  const toDoList = document.querySelector('#toDoList');
  const editForm = document.querySelector('#editForm');
  const editInput = document.querySelector('#editInput');
  const cancelEditButton = document.querySelector('#cancelEditButton');
  const doneButton = document.querySelector('.finishTodo')
// Funções
  const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneButton = document.createElement("button")
    doneButton.classList.add("finishToDo")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneButton)

    const editButton = document.createElement("button")
    editButton.classList.add("editToDo")
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editButton)

    const removeButton = document.createElement("button")
    removeButton.classList.add("removeToDo")
    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeButton)

    toDoList.appendChild(todo)

     addInput.value = "";
  }

  const finishToDo = () => {
    todo.classList.add("done")
}

// Eventos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = addInput.value

  if(inputValue){
    saveTodo(inputValue)
  }
  });

doneButton.addEventListener("click", finishToDo ());
