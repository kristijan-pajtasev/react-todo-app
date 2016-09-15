import React, { Component } from 'react';
import Task from './Task';
import TaskStore from "./TaskStore";
import EventEmitter from "../EventEmitter";
import TaskActions from "./TaskActions";
import "./TaskList.css";

class TaskList extends Component {
    constructor() {
        super();
        this.state = { tasks: [], filter: "" };
    };

    getTasks = (_this) => {
        let tasks = TaskStore.get();
        this.setState({tasks: tasks})
    };

    componentDidMount() {
        EventEmitter.subscribe("TASKS_ADDED", () => {
            var tasks = TaskStore.getAll();
            this.setState({tasks: tasks})
        });
        TaskActions.getTasks();
    };

    filterByStatus = (status) => {
        let tasks = [];
        switch(status) {
            case "":
                tasks = TaskStore.getAll();
                break;
            case "DONE":
                tasks = TaskStore.getDone();
                break;
            case "NOT_DONE":
                tasks = TaskStore.getNotDone();
                break;
            default:
                break;
        }
        this.setState({tasks: tasks, filter: status});
    };

    getClass(filter) {
        return "btn btn-primary " + (this.state.filter === filter ? "active" : "");
    }

    render() {
        return <div>
                    <div className="taskListFilter btn-group">
                        <button className={this.getClass("")} onClick={this.filterByStatus.bind(this, "")}>All</button>
                        <button className={this.getClass("DONE")} onClick={this.filterByStatus.bind(this, "DONE")}>Done</button>
                        <button className={this.getClass("NOT_DONE")} onClick={this.filterByStatus.bind(this, "NOT_DONE")}>Not done</button>
                    </div>
                    <ul className="taskList">
                    {this.state.tasks.map((t, i) => <Task key={i} task={t} />)}
                </ul>
            </div>;
    };
}

export default TaskList;