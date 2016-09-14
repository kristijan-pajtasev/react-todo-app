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

    setStatus(data) {
        this.tasks = this.tasks.map(t => {
            if(t.id === data.id) {
                t.isDone = data.isDone;
            }
            return t;
        });
        EventEmitter.publish("TASKS_ADDED");
    }

    getDone() {
        return this.tasks.filter( task => task.isDone );
    }

    getNotDone() {
        return this.tasks.filter( task => !task.isDone );
    }
}

export default new TaskStore();