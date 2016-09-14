import React, { Component } from 'react';
import Task from './Task';
import TaskStore from "./TaskStore";
import EventEmitter from "../EventEmitter";
import TaskActions from "./TaskActions";
import "./TaskList.css";

class TaskList extends Component {
    constructor() {
        super();
        this.state = { tasks: [] };
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
        this.setState({tasks: tasks});
    };

    render() {
        return <div>
                    <div className="taskListFilter">
                        <button onClick={this.filterByStatus.bind(this, "")}>All</button>
                        <button onClick={this.filterByStatus.bind(this, "DONE")}>Done</button>
                        <button onClick={this.filterByStatus.bind(this, "NOT_DONE")}>Not done</button>
                    </div>
                    <ul className="taskList">
                    {this.state.tasks.map((t, i) => <Task key={i} task={t} />)}
                </ul>
            </div>;
    };
}

export default TaskList;