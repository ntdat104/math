import React, { Component } from 'react';
import "../css/User.css";

class User extends Component {
    render() {
        return (
            <div className="user">
                <ul>
                    <li>Username: {this.props.appState.user.username}</li>
                    <li>Password: {this.props.appState.user.password}</li>
                    <li>Họ tên: {this.props.appState.user.fullname}</li>
                    <li>Giới tính: {this.props.appState.user.gender ? "Nữ" : "Nam"}</li>
                    <li>Lớp: {this.props.appState.user.class}</li>
                    <li>Số buổi học: {this.props.appState.user.count}</li>
                    <li>Điểm: {this.props.appState.user.mark}</li>
                </ul>
            </div>
        );
    }
}

export default User;