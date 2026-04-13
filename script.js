const tasks = document.querySelector(".divtasks");
const input = document.querySelector("#taskInput");

function addElement(){
    const task = document.createElement("h2");
    task.classList.add("task")
    const text = input.value.trim();
    if(text === ""){
        alert("Você precisa digitar uma tarefa!");
        return;
    }
    task.textContent = text;
    task.classList.add("taskcontent");
    tasks.appendChild(task);

    input.value = "";

// Check box
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.classList.add("checkBox")

    task.appendChild(checkBox)

    checkBox.addEventListener("change", () => {
        checkBox.classList.toggle("checked");
    });

// Remove botton
    const remove = document.createElement("input")
    remove.setAttribute("type", "button")
    remove.setAttribute("value", "Remover")
    remove.classList.add("removeBotton")

    task.appendChild(remove)

    remove.addEventListener("click", () => {
        task.remove()
    })
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        addElement();
    }
});