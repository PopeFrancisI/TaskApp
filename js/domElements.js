

class DomElements {
    constructor() {
        this.apiService = ApiService();
        this.todoAppElement = document.querySelector(".todo-app");

        this.loadAll();
    }

    loadAll(){
        this.apiService.getTasks(tasks => {
            tasks.map( task => {
                this.createTaskElement(task);
            });
        }).catch( error => {console.log(error)});
    }
}
