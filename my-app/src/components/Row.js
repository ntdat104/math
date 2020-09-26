import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hello: "a"
      }
    }
    checkGender() {
      if(this.props.student.gender === 0){
        return <td>Nam</td>
      }
      return <td>Nữ</td>
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
                {this.checkGender()}
                <td>
                    <button onClick={() => this.props.editStudent()}>Sửa</button>
                    <button onClick={() => this.props.removeStudent()}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Row;