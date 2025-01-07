const todoList = JSON.parse(localStorage.getItem('todoList')) || [];



renderTodoList();


function renderTodoList(){

let todoListHTML = '';

todoList.forEach(function(todoObject,index){
  /*for(let i=0 ; i<todoList.length ; i++){
    const todoObject = todoList[i];*/
  const name = todoObject.name; // const { name, dueDate } = todoObject
  const date = todoObject.dueDate;
  const html = `
  <div>${name}</div>
  <div>${date}</div> 
  <button onclick="
  todoList.splice(${index},1);
  renderTodoList();
  saveToStorage();
  " class="delete-button">Delete</button>`;
  
  todoListHTML += html ;

})

document.querySelector('.js-todo-list') /* we put <p> from here as we cannot put a para in div directly in html*/
.innerHTML = todoListHTML;
}



function addTodo(){

  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;


  todoList.push({
   name : name,
   dueDate :dueDate  
    
  });
  
inputElement.value = '';
renderTodoList();

saveToStorage();

}


function saveToStorage(){

  localStorage.setItem('todoList' , JSON.stringify(todoList));
}