

class DomElements {
    constructor() {
        this.apiService = new ApiService();
        this.todoAppElement = document.querySelector(".todo-app");

        this.loadAll();
    }

    loadAll(){
        this.apiService.getTasks().then(tasks => {
            tasks.forEach( task => {
                this.createTaskElement(task);
            });
        }).catch( error => {console.log(error)})
    }

    createTaskElement(task) {
        let taskSection = document.createElement("section");
        taskSection.classList.add("task");

        let taskH2 = document.createElement("h2");
        taskH2.innerText = task.title;
        taskSection.appendChild(taskH2);

        let taskList = document.createElement("ul");
        taskList.classList.add("list-group", "todo");
        taskH2.appendChild(taskList);

        let taskListFirst = document.createElement("li");
        taskListFirst.classList.add("list-group-item", "active", "task-description");
        taskListFirst.innerText = task.description;
        taskList.appendChild(taskListFirst);

        if(task.status === "open"){
            let finishButton = document.createElement("a");
            finishButton.classList.add("btn", "btn-secondary", "float-right");
            finishButton.innerText = "Finish";
            taskListFirst.appendChild(finishButton);

            let addOperationButton = document.createElement("a");
            addOperationButton.classList.add("btn", "btn-secondary", "float-right");
            addOperationButton.innerText = "Add operation";
            taskListFirst.appendChild(addOperationButton);
        }

        this.todoAppElement.appendChild(taskSection);
    }
}
