const todoList = [];




function renderTodoList(){

let todoListHTML = '';

for(let i=0 ; i<todoList.length ; i++){
const todo = todoList[i];
const html = `<p>${todo}</p>`;
todoListHTML += html ;
}

document.querySelector('.js-todo-list') /* we put <p> from here as we cannot put a para in div directly in html*/

.innerHTML = todoListHTML;
}


function addTodo(){

  const inputElement = document.querySelector('.js-input');
  const name =inputElement.value;
  todoList.push(name);
  
inputElement.value = '';
renderTodoList();

}