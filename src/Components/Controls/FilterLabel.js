import React, { Component } from 'react';

class FilterLabel extends Component {
    render() {
        return (
            <div>
                <div className="filter filter--label">
                    <ul className="list-unstyled text-left">DEPARTMENT
                        <li className="py-1 display-5 lead">
                            <i className="fa fa-circle mr-2" /> Sale Dept
                        </li>
                        <li className="py-1 display-5 lead">
                            <i className="fa fa-circle mr-2" /> Masketing Dept
                        </li>
                        <li className="py-1 display-5 lead">
                            <i className="fa fa-circle mr-2" /> Admin Dept
                        </li>
                        <li className="py-1 display-5 lead">
                            <i className="fa fa-circle mr-2" /> Customer Service
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilterLabel;