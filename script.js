let task = null;

function isChecked(event){
    let para = event.srcElement.nextSibling
    let textStyle = para.style.textDecoration
    if (textStyle === "line-through"){
        para.style.textDecoration = "none"
    }
    else{
        para.style.textDecoration = "line-through"
    }
}

function storeTask(event){
   task = event.target.value;
}

function deleteTask(event){
    const element = event.srcElement.parentElement.parentElement
    element.remove()
    checkTaskList()
}

function createDeleteButton(){
    const button = document.createElement("button")
    button.className = "delete-button"
    button.textContent = "x"

    button.addEventListener("click",deleteTask)

    return button
}

function createTaskItem(task){

    const li = document.createElement("li");

    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const para = document.createElement("p");
    para.textContent = task

    const deleteButton = createDeleteButton()

    taskItem.appendChild(checkBox);
    taskItem.appendChild(para);
    taskItem.appendChild(deleteButton)

    li.appendChild(taskItem);

    checkBox.addEventListener("change",isChecked)

    return li
}

function checkTaskList(){
    console.log(ul.hasChildNodes())
    if (!ul.hasChildNodes()){
        ul.remove()
        taskList.textContent = "No Task for the day"
    }
}

function addTask(){

    if (task){
        if (taskList.textContent === "No Task for the day"){
            taskList.textContent = null;
        }

        if (taskList.querySelector("ul") === null){   
            ul.style.listStyle = "none";
            taskList.appendChild(ul);           
        }

        const li = createTaskItem(task)
        ul.appendChild(li)
    }
}

const inputFiled = document.querySelector(".task-form input");
const addButton = document.querySelector(".task-form button");
const taskList = document.querySelector(".task-list");
const ul = document.createElement("ul");

inputFiled.addEventListener("change",storeTask);
addButton.addEventListener("click",addTask);
ul.addEventListener("change",checkTaskList)