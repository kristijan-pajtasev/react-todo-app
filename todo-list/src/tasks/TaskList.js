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
        var tasks = TaskStore.get();
        this.setState({tasks: tasks})
    };

    componentDidMount() {
        EventEmitter.subscribe("TASKS_ADDED", () => {
            var tasks = TaskStore.getAll();
            this.setState({tasks: tasks})
        });
        TaskActions.getTasks();
    };

    render() {
        return <ul className="taskList">
                {this.state.tasks.map((t, i) => <Task key={i} task={t} />)}
            </ul>;
    };
}

export default TaskList;