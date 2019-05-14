import React, { Component } from 'react';
import THead from './TaskItems/THead';
import Item from './TaskItems/Item';
import Search from './TaskItems/Search';

class TaskItem extends Component {

    render() {

        let { tasks, filterType, filterProgress, filterPriority, filterLabel } = this.props;
        let filterTasks = [];

        switch (filterType) {
            case "filterProgress":
                if (filterProgress === -1) {
                    filterTasks = tasks
                }
                for (let task of tasks) {
                    if (task.status === filterProgress) {
                        filterTasks = [...filterTasks, task]
                    }
                }
                break;
            case "filterLabel":
                if (filterLabel === -1) {
                    filterTasks = tasks
                }
                for (let task of tasks) {
                    let labelArr = task.labelArr;
                    for (let label of labelArr) {
                        if (parseInt(label) === filterLabel) {
                            filterTasks = [...filterTasks, task]
                        }
                    }
                }
                break;
            case "filterPriority":
                if (parseInt(filterPriority) === -1) {
                    filterTasks = tasks
                }
                for (let task of tasks) {
                    if (task.priority === parseInt(filterPriority)) {
                        filterTasks = [...filterTasks, task]
                    }
                }
                break;
            case "filterSearch":
                filterTasks = tasks.filter((task)=>{
                    return task.name.toLowerCase().indexOf(this.props.filterSearch) !== -1
                })
                break;
            default:
                filterTasks = tasks
                break;
        }
        // }

        //Lọc mảng hiển thị cho vào LIST
        let elmItem = '';
        elmItem = filterTasks.map((item, index) => {
            return <Item
                key={index}
                item={item}
                index={index}
                editTask={this.props.editTask}
                changedProgress={this.props.changedProgress}
            />
        })

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
                            <Search 
                                changeFilterSearch={this.props.changeFilterSearch}
                            />
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
