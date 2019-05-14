import React, { Component } from 'react';
import Select from 'react-select';

const optionsStatus = [
    { value: 0, label: 'Doing...' },
    { value: 1, label: 'Holding' },
    { value: 2, label: 'Complete' },
    { value: 3, label: 'Cancel' }
];

class Item extends Component {
    
    ////CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionStatus: this.props.status,
        };
    }

    ////FUNCTION
    handleChange = (selectedOptionStatus) => {
        this.setState({
            selectedOptionStatus: selectedOptionStatus.value,
        });
    }

    handleEditTask = () => {
        this.props.editTask(this.props.item)
    }

    //Hàm get màu label dựa trên label name
    getLabelColor = (label) => {
        let labelColor; //khởi tạo biến labelColor để hứng kết quả return về từ func
        switch (label) {
            case 0:
                return labelColor = '#389E0D';
            case 1:
                return labelColor = '#722ED1';
            case 2:
                return labelColor = '#13C2C2';
            case 3:
                return labelColor = '#CF1322';
            default:
                labelColor = '';
                break;
        }
        return labelColor;
    }

    ////RENDER
    render() {
        let { index, item } = this.props;
        let { selectedOptionStatus } = this.state;

        //Label
        let elmLabel = item.labelArr.map((e, i) => {
            return <i
                key={i}
                className="fa fa-circle"
                style={{ color: this.getLabelColor(i) }} //style là 1 mảng nhiều obj
            />
        });

        //Member element
        let elmMember = item.memIDArr.map((e, i) => {
            return <img
                src={'./img/' + e + '.jpg'}
                className="user"
                alt="task manager"
            />
        });

        //Get Element độ ưu tiên công việc
        let elmPriority;
        let classPriority;
        switch (parseInt(item.priority, 10)) {
            case 1:
                elmPriority = "Low"
                classPriority = "text-primary"
                break;
            case 2:
                elmPriority = "Medium"
                classPriority = "text-warning"
                break;
            case 3:
                elmPriority = "Hight"
                classPriority = "text-danger"
                break;
            default:
                elmPriority = "N/A"
                classPriority = "text-success"
                break;
        }

        // //get element status
        let elmStatus;
        let StatusLabel;
        switch (parseInt(this.state.selectedOptionStatus, 10)) {
            case null:
                elmStatus = "fa fa-spinner"
                StatusLabel="Doing..."
                break;
            case 1:
                elmStatus = "fa fa-pause"
                StatusLabel="Holding"
                break;
            case 2:
                elmStatus = "fa fa-check-square-o"
                StatusLabel="Complete"
                break;
            case 3:
                elmStatus = "fa fa-trash-o"
                StatusLabel="Cancel"
                break;
            default:
                elmStatus = "fa fa-spinner"
                StatusLabel="Doing..."
                break;
        }

        return (
            <tr>
                <td className="text-center"> {index + 1} </td>
                <td className="text-left"> {item.name} </td>
                <td className="text-center">
                    {elmLabel}
                </td>
                <td className={`${classPriority}  font-weight-bold text-center`}>
                    {elmPriority}
                </td>
                <td className="text-center">
                    {elmMember}
                </td>
                <td className="text-left">
                    <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick={this.handleEditTask}
                    >
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  Edit
                    </button>
                </td>
                <td>
                    <Select
                        value={selectedOptionStatus}
                        onChange={this.handleChange}
                        options={optionsStatus}
                        placeholder={StatusLabel}
                    />
                </td>
                <td className="text-center">
                    <i className={`fa ${elmStatus} mr-2`} />
                </td>
            </tr>
        );
    }
}

export default Item;