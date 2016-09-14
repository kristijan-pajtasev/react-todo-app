import TaskStore from "./TaskStore";

class TaskActions {
    getTasks() {
        fetch("http://127.0.0.1:3001/task", {
            mode: "cors",
            method: "get"
        }).then(function(response) {
                response.json()
                    .then(function(jsonData){
                        TaskStore.addAll(jsonData.tasks)
                    })
            })

    }

    addTask(task) {
        fetch("http://127.0.0.1:3001/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + JSON.stringify(task)
        }).then((response) => {
            if(response.status === 200) {
                response.json().then((json) => {
                    TaskStore.addAll(json)
                })
            }
        });

    }

    markAsDone(id) {
        this.setStatus({ id: id, isDone: true });
    }

    reopen(id) {
        this.setStatus({ id: id, isDone: false });
    }

    setStatus(data) {
        fetch(`http://127.0.0.1:3001/task/${data.id}/done`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + JSON.stringify(data)
        }).then((response) => {
            if(response.status === 200) {
                TaskStore.setStatus(data);
            }
        });
    }

    deleteTask(id) {
        fetch(`http://127.0.0.1:3001/task/${id}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            if(response.status === 200) {
                TaskStore.deleteTask(id);
            }
        });
    }
}

export default new TaskActions();