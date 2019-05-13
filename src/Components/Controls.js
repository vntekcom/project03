import React, { Component } from 'react';
import AddNewTask from './Controls/AddNewTask';
import LoadLocalStorage from './Controls/LoadLocalStorage';
import FilterProgress from './Controls/FilterProgress';
import FilterLabel from './Controls/FilterLabel';
import FilterPriority from './Controls/FilterPriority';
import Sort from './Controls/Sort';

class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">

                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="task manager" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Alan NG</h3>
                </div>

                {/* Add New Task button */}
                <AddNewTask />

                {/* Filter */}
                <div className="px-3">

                    {/* Filter by Progress */}
                    <FilterProgress />

                    {/* Filter by Label */}
                    <FilterLabel />

                    {/* Filter by Priority */}
                    <FilterPriority />

                    {/* Sort */}
                    <Sort />

                    {/* Load data form LoadLocalStorage */}
                    <LoadLocalStorage 
                        generateData={this.props.generateData}
                    />

                </div>
            </div>
        );
    }
}

export default Controls;