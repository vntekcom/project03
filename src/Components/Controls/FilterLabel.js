import React, { Component } from 'react';

class FilterLabel extends Component {

    handleChangeLabel = (changeLabel) => {
        this.props.changeFilterLabel(changeLabel);
    }

    render() {
        return (
            <div>
                <div className="filter filter--label">
                    <ul className="list-unstyled text-left">DEPARTMENT
                        <li className="py-1 display-5 lead" onClick={this.handleChangeLabel.bind(this, 0)}>
                            <i className="fa fa-circle mr-2" /> Sale Dept
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeLabel.bind(this, 1)}>
                            <i className="fa fa-circle mr-2" /> Masketing Dept
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeLabel.bind(this, 2)}>
                            <i className="fa fa-circle mr-2" /> Admin Dept
                        </li>
                        <li className="py-1 display-5 lead" onClick={this.handleChangeLabel.bind(this, 3)}>
                            <i className="fa fa-circle mr-2" /> Customer Service
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilterLabel;