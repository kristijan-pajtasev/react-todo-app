import React, { Component } from 'react';
import "./Task.css";

class Task extends Component {
    render() {
        return (<li className="task">{this.props.task.task}</li>);
    }
}

export default Task;