import React, { Component } from 'react';

class AddNewTask extends Component {

    handelAddNewTask = () => {
        this.props.clearForAddNewTask()
    }

    render() {
        return (
            <div>
                <button 
                    type="button" 
                    className="btn my-3 btn--newTask" 
                    data-toggle="modal" 
                    data-target="#modalTask"
                    onClick={this.handelAddNewTask}
                >
                    <i className="fa fa-pencil-square-o" />
                    NEW TASK
                </button>
            </div>
        );
    }
}

export default AddNewTask;