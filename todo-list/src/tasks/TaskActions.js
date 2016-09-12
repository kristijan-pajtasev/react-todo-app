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
            response.json().then((json) => {
                TaskStore.addAll(json)
            })
        });

    }

    markAsDone(id) {
        this.setStatus({ id: id, isDone: true });
    }

    reopen(id) {
        this.setStatus({ id: id, isDone: false });
    }

    setStatus(data) {
        console.log(`mark as done ${data.id}`);
        fetch(`http://127.0.0.1:3001/task/${data.id}/done`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + JSON.stringify(data)
        }).then((response) => {
            console.log("response done");
            TaskStore.setStatus(data);
            //response.json().then((json) => {
            //    TaskStore.addAll(json)
            //})
        });
    }
}

export default new TaskActions();