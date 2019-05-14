import React, { Component } from 'react';

class FilterProgress extends Component {
    
    handleChangeProgress = (changeProgress) => {
        this.props.changeFilterProgress(changeProgress);
    }

    render() {

        return (
            <div>
                <div className="filter filter--progress">
                    <ul className="list-unstyled text-left"> FILTER
                        <li className="py-1 display-5 lead" onClick={this.handleChangeProgress.bind(this, -1)}>
                        <i className="fa fa-filter mr-2" /> All
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeProgress.bind(this, 0)}>
                            <i className="fa fa-spinner mr-2" />Doing...
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeProgress.bind(this, 1)}>
                            <i className="fa fa-pause mr-2" />Holding
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeProgress.bind(this, 2)}>
                            <i className="fa fa-check-square-o mr-2" />Complete
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeProgress.bind(this, 3)}>
                            <i className="fa fa-trash-o mr-2" />Cancel
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilterProgress;