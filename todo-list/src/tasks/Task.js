import React, { Component } from 'react';
import TaskActions from "./TaskActions";
import "./Task.css";

class Task extends Component {
    markAsDone(id) {
        console.log("mark as done: " + id)
        TaskActions.markAsDone(id);

    }

    render() {
        return (<li className="task">
            {this.props.task.task}
            <span onClick={this.markAsDone.bind(this, this.props.task.id)}>Mark as done
                {(() => { if(this.props.task.isDone) { return " this is done" } else { return "" } })()}
            </span>
        </li>);
    }
}

export default Task;