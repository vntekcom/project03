import React, { Component } from 'react';

class FilterPriority extends Component {
    render() {
        return (
            <div>
                <div className="form-group text-left">
                    <label htmlFor="sel1">Filter by Priority</label>
                    <select className="form-control">
                        <option className="font-weight-bold">All</option>
                        <option className="text-info font-weight-bold">Low</option>
                        <option className="text-success font-weight-bold">Midle</option>
                        <option className="text-danger font-weight-bold">Hight</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterPriority;