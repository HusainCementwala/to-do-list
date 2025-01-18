const todoList = JSON.parse(localStorage.getItem('todoList')) || [];



renderTodoList();


function renderTodoList(){

let todoListHTML = '';

todoList.forEach((todoObject,index)=>{ //chnaged it to an arrow function
  /*for(let i=0 ; i<todoList.length ; i++){
    const todoObject = todoList[i];*/
  const name = todoObject.name; // const { name, dueDate } = todoObject
  const date = todoObject.dueDate;
  const html = `
  <div>${name}</div>
  <div>${date}</div> 
  <button class="delete-button js-delete-todo-button">Delete</button>`;
  
  todoListHTML += html ;

})

document.querySelector('.js-todo-list') /* we put <p> from here as we cannot put a para in div directly in html*/
.innerHTML = todoListHTML;



//using eventListener
document.querySelectorAll('.js-delete-todo-button')
 .forEach((deleteButton,index)=>{

 deleteButton.addEventListener('click',
  ()=>{
    todoList.splice(index,1);
  renderTodoList();
  saveToStorage();
  }
 );

 });




}


//adding eventListener instead of onclick
document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo();
});



//adding eventListener instead of onkeydown
document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    addTodo();
  }
});






function addTodo(){

  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
 

  // Check if the input is empty
  if (!name) {
    alert('Please enter a task!');
    return; // Stop further execution if input is invalid
  }

  todoList.push({
   name : name,
   dueDate :dueDate  
    
  });
  
inputElement.value = '';//erasing the current typed task from input box so that new task can be typed
renderTodoList();

saveToStorage();

}


function saveToStorage(){

  localStorage.setItem('todoList' , JSON.stringify(todoList));
}