import React, { Component } from 'react';

class Row extends Component {
    checkPermission() {
        switch (this.props.student.gender) {
          case 0:
            return <td>Nam</td>;
          case 1:
            return <td>Nữ</td>;
          default:
            break;
        }
      }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.student.username}</td>
                <td>{this.props.student.password}</td>
                <td>{this.props.student.fullname}</td>
                <td>{this.props.student.grade}</td>
                <td>{this.props.student.count}</td>
                <td>{this.props.student.mark}</td>
                {this.checkPermission()}
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Row;