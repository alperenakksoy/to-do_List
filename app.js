const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");
const removeBtn = document.querySelector("listContainer li span");
// const checkedBtn = document.querySelector("");

const addTask = ()=>{
    if(inputBox.value==''){
        alert("You have to add a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
    
};
addButton.addEventListener('click',addTask);

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = ()=>{
    localStorage.setItem('data',listContainer.innerHTML);
};

const displayDataList = ()=>{
    listContainer.innerHTML=localStorage.getItem('data');
}

displayDataList();