import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="task manager" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>
                <button type="button" className="btn my-3 btn--newTask" data-toggle="modal" data-target="#modalTask">
                    <i className="fa fa-pencil-square-o" />
                    Tạo Task mới
                </button>
                {/* Filter */}
                <div className="px-3">
                    <div className="filter filter--progress">
                        <ul className="list-unstyled text-left">Lọc
                      <li className="py-1 display-5 lead">
                                <i className="fa fa-check-square-o mr-2" />Hoàn thành</li>
                            <li className="py-1 display-5 lead">
                                <i className="fa fa-trash-o mr-2" />Hủy bỏ</li>
                        </ul>
                    </div>
                    <div className="filter filter--label">
                        <ul className="list-unstyled text-left">Nhãn
                      <li className="py-1 display-5 lead">
                                <i className="fa fa-circle mr-2" />Frontend</li>
                            <li className="py-1 display-5 lead">
                                <i className="fa fa-circle mr-2" />Backend</li>
                            <li className="py-1 display-5 lead">
                                <i className="fa fa-circle mr-2" />API</li>
                            <li className="py-1 display-5 lead">
                                <i className="fa fa-circle mr-2" />Issue</li>
                        </ul>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="sel1">Độ ưu tiên</label>
                        <select className="form-control">
                            <option className="font-weight-bold">Tất cả</option>
                            <option className="text-info font-weight-bold">Thấp</option>
                            <option className="text-success font-weight-bold">Trung bình</option>
                            <option className="text-danger font-weight-bold">Cao</option>
                        </select>
                    </div>
                    <div className="form-group text-left">
                        <label>Sắp xếp theo công việc</label>
                        <select className="form-control">
                            <option>Từ A đến Z</option>
                            <option>Từ Z đến A</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;