import React, { Component } from 'react';
import TaskActions from "./TaskActions";
import "./Task.css";

class Task extends Component {
    markAsDone(id) {
        console.log("mark as done: " + id)
        TaskActions.markAsDone(id);

    }

    getAction(task) {
        if(task.isDone) {
            return <span>This is done</span>;
        } else {
            return (<button onClick={this.markAsDone.bind(this, this.props.task.id)}>
                        Mark as done
                    </button>)
        }
    }

    render() {
        return (<li className="task">
            {this.props.task.task}

            {this.getAction(this.props.task)}

        </li>);
    }
}

export default Task;