import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div>
                <div className="form-group text-left">
                    <label>Sort</label>
                    <select className="form-control">
                        <option>A - Z</option>
                        <option>Z - A</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Sort;