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
        //var d = new FormData();
        //d.append("json", JSON.stringify({task: "test"}))
        //
        //
        //console.log(JSON.stringify({task: "test"}))
        //var headers = new Headers();
        //headers.append("Content-Type", "x-www-form-urlencoded");
        //headers.append("Accept", "application/json");
        //fetch("http://127.0.0.1:3001/task", {
        //    mode: "cors",
        //    method: "POST",
        //    heders: {
        //       "Content-type": "application/json"
        //    },
        //    body: JSON.stringify({task: "test"})
        //}).then(function(response) {
        //    //response.json()
        //    //    .then(function(jsonData){
        //    //        TaskStore.addAll(jsonData.tasks)
        //    //    })
        //})


        // working version
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
}

export default new TaskActions();