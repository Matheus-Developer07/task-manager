const tasks = document.querySelector(".divtasks");
const input = document.querySelector("#taskInput");

function addElement(){
    const task = document.createElement("h2");
    const text = input.value.trim();
    if(text === ""){
        alert("Você precisa digitar uma tarefa!");
        return;
    }
    task.textContent = text;
    task.classList.add("taskcontent");
    tasks.appendChild(task);

    input.value = "";
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        addElement();
    }
});