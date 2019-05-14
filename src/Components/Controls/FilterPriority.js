import React, { Component } from 'react';

class FilterPriority extends Component {

    constructor(props) {
        super(props);
        this.state = {
            priority: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeFilterPriority(this.state.priority)
        })
    }

    render() {
        return (
            <div>
                <div className="form-group text-left">
                    <label htmlFor="sel1">By priority</label>
                    <select 
                        className="form-control"
                        name="priority"
                        onChange={this.handleChange}
                    >
                        <option
                            className="font-weight-bold"
                            value={-1}
                        >All</option>
                        <option
                            className="text-info font-weight-bold"
                            value={3}
                        >Low</option>
                        <option
                            className="text-success font-weight-bold"
                            value={2}
                        >Medium</option>
                        <option
                            className="text-danger font-weight-bold"
                            value={1}
                        >Hight</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterPriority;