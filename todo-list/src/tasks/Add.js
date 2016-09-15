import "./Add.css";
import React, {Component} from "react";
import TaskActions from "./TaskActions"

class AddTask extends Component {

    constructor() {
        super();
        this.state = { task: "" };
    };

    handleChange(_this) {
        this.setState({task: _this.target.value})
    }

    addTask(ev) {
        ev.preventDefault();
        if(this.state.task) {
            TaskActions.addTask({task: this.state.task });
            this.setState({task: ""});
        }
    };

    render() {
        return <div className="addTask">
                <form>
                    <textarea onChange={this.handleChange.bind(this)} value={this.state.task}></textarea>
                    <div className="controls">
                        <button className="btn btn-primary" onClick={this.addTask.bind(this)}>Add task</button>
                    </div>
                </form>
            </div>
    }
}

export default AddTask;