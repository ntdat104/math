import React, { Component } from 'react';

class AdminRowStudent extends Component {
    checkGender() {
        if(this.props.student.gender === 0){
            return <td>Nam</td>
        }
        return <td>Nữ</td>
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.student.username}</td>
                <td>{this.props.student.password}</td>
                <td>{this.props.student.fullname}</td>
                <td>{this.props.student.grade}</td>
                <td>{this.props.student.count}</td>
                <td>{this.props.student.mark}</td>
                {this.checkGender()}
                <td>
                    <button onClick={() => this.props.addStudent()}>Thêm</button>
                    <button onClick={() => this.props.getEditStudent()}>Sửa</button>
                    <button onClick={() => this.props.removeStudent()}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default AdminRowStudent;