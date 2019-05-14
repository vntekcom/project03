import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProgress: ''
        };
    }

    onChangeProgress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changedProgress(this.props.item.id, this.state.selectedProgress)
        })
    }

    getLabelColor = (label) => {
        let labelColor; //khởi tạo biến labelColor để hứng kết quả return về từ func
        switch (label) {
            case "0":
                return labelColor = '#389E0D';
            case "1":
                return labelColor = '#722ED1';
            case "2":
                return labelColor = '#13C2C2';
            case "3":
                return labelColor = '#CF1322';
            default:
                labelColor = '';
                break;
        }
        return labelColor;
    }

    getStatusIcon = (status) => {
        let elmStatus; //khởi tạo biến labelColor để hứng kết quả return về từ func
        switch (status) {
            case 0:
                return elmStatus = "fa fa-spinner"
            case 1:
                return elmStatus = "fa fa-pause"
            case 2:
                return elmStatus = "fa fa-check-square-o"
            case 3:
                return elmStatus = "fa fa-trash-o"
            default:
                elmStatus = "fa fa-spinner"
                break;
        }
        return elmStatus;
    }

    handleEditTask = () => {
        this.props.editTask(this.props.item)
    }

    render() {
        let { index, item } = this.props;

        //DEPARTMENT
        let elmLabel = item.labelArr.map((e, i) => {
            return <i
                key={i}
                className="fa fa-circle"
                style={{ color: this.getLabelColor(e) }} //style là 1 mảng nhiều obj
            />
        });

        //MEMBER
        let elmMember = item.memIDArr.map((e, i) => {
            return <img
                key={i}
                src={'./img/' + e + '.jpg'}
                className="user"
                alt="task manager"
            />
        });

        //PRIORITY
        let elmPriority;
        let classPriority;
        let iconPriority;
        switch (parseInt(item.priority, 10)) {
            case 1:
                elmPriority = "Hight"
                classPriority = "text-danger"
                iconPriority="fa fa-battery-half"
                break;
            case 2:
                elmPriority = "Medium"
                classPriority = "text-warning"
                iconPriority="fa fa-battery-three-quarters"
                break;
            case 3:
                elmPriority = "Low"
                classPriority = "text-success"
                iconPriority="fa fa-battery-full"
                break;
            default:
                elmPriority = "N/A"
                classPriority = "text-success"
                iconPriority="fa fa-battery-half"
                break;
        }

        return (
            <tr>
                <td className="text-center"> {index + 1} </td>
                <td className="text-left"> {item.name} </td>
                <td className="text-center">
                    {/* Department */}
                    {elmLabel}
                </td>
                <td className={`${classPriority}  font-weight-bold text-left`}>
                    <i className={iconPriority} aria-hidden="true"></i> {elmPriority} 
                </td>
                <td className="text-center">
                    {elmMember}
                </td>
                <td className="text-left">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="modal"
                        data-target="#modalTask"
                        onClick={this.handleEditTask}
                    >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>  Edit
                            </button>
                </td>
                <td>
                    <select
                        className="form-control"
                        name="selectedProgress"
                        onChange={this.onChangeProgress}
                    >
                        <option defaultValue={-1} selected disabled hidden>===></option>
                        <option value={0}>Doing...</option>
                        <option value={1}>Holding</option>
                        <option value={2}>Complete</option>
                        <option value={3}>Cancel</option>
                    </select>
                </td>
                <td className="text-center">
                    <i className={`fa ${this.getStatusIcon(item.status)} mr-2`} />
                </td>
            </tr>
        );
    }
}

export default Item;