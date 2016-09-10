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
        console.log(`mark as done ${id}`);
        fetch(`http://127.0.0.1:3001/task/${id}/done`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + JSON.stringify({ id: id })
        }).then((response) => {
            console.log("response done");
            TaskStore.markAsDone(id);
            //response.json().then((json) => {
            //    TaskStore.addAll(json)
            //})
        });
    }
}

export default new TaskActions();