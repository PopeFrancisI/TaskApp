

class ApiService {

    constructor() {
        this.apiKey = "13ee767f-6d56-405e-a376-4641d6f45134";
        this.url = "https://todo-api.coderslab.pl";
    }

    getTasks() {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/api/tasks`, {
                headers: {"Authorization": this.apiKey},
                method: "GET"
            })
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    let tasksData = json.data;
                    let tasks = tasksData.map(taskData => {
                        return this.createTaskFromResponseData(taskData);
                    })
                    resolve(tasks);
                })
                .catch(error => reject(error))
        });
    }

    createTaskFromResponseData(data) {
        let task = new Task(data.title, data.description, data.status);
        if(data.id){
            task.id = data.id;
        }
        return task;
    }
}
