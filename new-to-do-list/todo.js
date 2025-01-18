const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){

  if(inputBox.value === ''){

    alert("Write a Task to perform");
  }
  else{

    let list = document.createElement("li");
    
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //this is the delete icon code that is added dynamically , we can also use an image and operate it using event listner
    list.appendChild(span);
  }

saveData();
  inputBox.value = '';//emptying he input box once list is added
  
}


listContainer.addEventListener("click",function(e){

  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }

  else if(e.target.tagName === "SPAN"){

    e.target.parentElement.remove();
    saveData();
  }

}, false);

function saveData(){

  localStorage.setItem("data", listContainer.innerHTML);
  //not using stringify as data already in string format
}


function showTask(){

  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();