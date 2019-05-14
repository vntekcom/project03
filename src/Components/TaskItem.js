import React, { Component } from 'react';
import THead from './TaskItems/THead';
import Item from './TaskItems/Item';

class TaskItem extends Component {

    render() {

        let elmItem = '';
        if (this.props.tasks) { //kiểm tra sự tồn tại của mảng có hay không
            elmItem = this.props.tasks.map((item, index) => {
                return <Item
                    key={index}
                    item={item}
                    index={index}
                    editTask={this.props.editTask}
                    changedProgress={this.props.changedProgress}
                />
            })
        }

        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">TASK LIST</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input type="text" className="form-control" placeholder="Find task..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        {/* THead */}
                        <THead />
                        <tbody>
                            {/* Task item */}
                            {elmItem}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskItem;
