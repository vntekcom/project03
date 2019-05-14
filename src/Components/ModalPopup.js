import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
var randomID = require('random-id');

class ModalPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            priority: '',
            memIDArr: [],
            labelArr: []
        }
    }

    ////ONCHANGE FORM
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            id: randomID(5, "aA0")
        })
    }

    memberChanged = (newmember) => {
        this.setState({
            memIDArr: newmember
        });
    }

    labelChanged = (newlabel) => {
        this.setState({
            labelArr: newlabel
        });
    }

    ////ON SUBMIT FORM
    onSubmit = (event) => {
        event.preventDefault(); //Không request ra khỏi trang
        this.props.addNewTask(this.state)
    }

    render() {

        // console.log(this.state);

        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">ADD NEW TASK</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>

                        <form onSubmit={this.onSubmit} >
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={this.onChange}
                                        placeholder="Task name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        defaultValue={""}
                                        name="description"
                                        onChange={this.onChange}
                                        placeholder="Description"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        name="priority"
                                        onChange={this.onChange}
                                    >
                                        <option value={-1}>--Select--</option>
                                        <option value={3}>LOW</option>
                                        <option value={3}>MIDLE</option>
                                        <option value={3}>HIGHT</option>
                                    </select>
                                </div>

                                <label>Co-worker:</label>
                                <br />
                                <CheckboxGroup
                                    name="memIDArr"
                                    value={this.state.memIDArr}
                                    onChange={this.memberChanged}
                                    checkboxDepth={2}
                                >
                                    <label><Checkbox value="user_0" /> Alan</label>
                                    <label><Checkbox value="user_1" /> Grace</label>
                                    <label><Checkbox value="user_2" /> Junny</label>
                                    <label><Checkbox value="user_3" /> Jennie</label>
                                    <label><Checkbox value="user_4" /> Kay</label>
                                    <label><Checkbox value="user_5" /> Bin</label>
                                    <label><Checkbox value="user_6" /> Tina</label>
                                </CheckboxGroup>
                                <br />

                                <label>Dept:</label>
                                <br />
                                <CheckboxGroup
                                    name="labelArr"
                                    value={this.state.labelArr}
                                    onChange={this.labelChanged}
                                    checkboxDepth={2}
                                >
                                    <label><Checkbox value="0" /> Sale</label>
                                    <label><Checkbox value="1" /> Marketing</label>
                                    <label><Checkbox value="2" /> Admin</label>
                                    <label><Checkbox value="3" /> CS</label>
                                </CheckboxGroup>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    SAVE
                            </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal">
                                    CLOSE
                            </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPopup;
