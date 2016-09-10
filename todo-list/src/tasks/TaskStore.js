import EventEmitter from "./../EventEmitter";

class TaskStore {
    constructor() {
        this.tasks = [];
    }

    getAll() {
        return this.tasks;
    }

    add (task) {
        this.tasks.push(task);
        EventEmitter.publish("TASKS_ADDED");
    }

    addAll(tasks) {
        this.tasks = this.tasks.concat(tasks);
        EventEmitter.publish("TASKS_ADDED");
    }

    markAsDone(id) {
        this.tasks = this.tasks.map(t => {
            if(t.id === id) {
                t.isDone = true;
            }
            return t;
        });
        EventEmitter.publish("TASKS_ADDED");
    }

}

export default new TaskStore();