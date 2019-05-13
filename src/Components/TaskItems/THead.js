import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="text-center">No.</th>
                    <th className="text-center">Task</th>
                    <th className="text-center">Dept</th>
                    <th className="text-center">Priority</th>
                    <th className="text-center">Member</th>
                    <th className="text-center"></th>
                    <th>Progress</th>
                    <th className="text-center">Status</th>
                </tr>
            </thead>
        );
    }
}

export default THead;