

class DomElements {
    constructor() {
        this.apiService = ApiService();
        this.todoAppElement = document.querySelector(".todo-app");

        this.loadAll();
    }
}
