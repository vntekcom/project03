import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class ModalPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            name: '',
            description: '',
            priority: '',
            memIDArr: [],
            labelArr: ''
        }
    }

    ////ONCHANGE FORM
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeMember = (event) => {
        this.setState({
            memIDArr:event
        });
    }

    ////ON SUBMIT FORM
    onSubmit = (event) => {
        event.preventDefault(); //Không request ra khỏi trang
    }

    render() {

        console.log(this.state);

        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm công việc</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>

                        <form onSubmit={this.onSubmit} >
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        id="description"
                                        defaultValue={""}
                                        name="description"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
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

                                <label htmlFor>Người thực hiện:</label>
                                <br />
                                <CheckboxGroup
                                    name="memIDArr"
                                    value={this.state.memIDArr}
                                    onChange={this.onChangeMember}
                                    checkboxDepth={2}
                                >
                                    <label><Checkbox value="" /> Alan</label>
                                    <label><Checkbox value="" /> Grace</label>
                                    <label><Checkbox value="" /> Junny</label>
                                    <label><Checkbox value="" /> Jennie</label>
                                    <label><Checkbox value="" /> Kay</label>
                                    <label><Checkbox value="" /> Bin</label>
                                    <label><Checkbox value="" /> Tina</label>
                                </CheckboxGroup>
                                <br /><br />

                                <label htmlFor>Nhãn:</label>
                                <br />
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Frontend
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Backend
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />API
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Issue
                                </label>
                                </div>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-dismiss="modal"
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
