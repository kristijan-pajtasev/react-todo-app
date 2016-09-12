import React, { Component } from 'react';
import TaskActions from "./TaskActions";
import "./Task.css";

class Task extends Component {
    markAsDone(id) {
        console.log("mark as done: " + id)
        TaskActions.markAsDone(id);

    }

    reopen(id) {
        console.log("mark as done: " + id)
        TaskActions.reopen(id);

    }

    getAction(task) {
        if(task.isDone) {
            return (<button onClick={this.reopen.bind(this, this.props.task.id)}>
                Reopen
            </button>);
        } else {
            return (<button onClick={this.markAsDone.bind(this, this.props.task.id)}>
                        Mark as done
                    </button>);
        }
    }

    getClassName(task) {
        if(task.isDone) {
            return "done";
        } else {
            return "";
        }
    }

    render() {
        return (<li className="task">
            <span className={this.getClassName(this.props.task)}>
                {this.props.task.task}
            </span>

            {this.getAction(this.props.task)}

        </li>);
    }
}

export default Task;