import React, { Component } from 'react';
import "../css/Admin.css";
import AdminAddStudentForm from './AdminAddStudentForm';
import AdminEditStudentForm from './AdminEditStudentForm';
import AdminRowStudent from "./AdminRowStudent";

class Admin extends Component {
    mapStudents(){
        return this.props.appState.students.map((student, index) => (
            <AdminRowStudent
                key={index}
                stt={index + 1}
                student={student}
                turnOnAddStudentStatus={() => this.props.turnOnAddStudentStatus()}
                turnOnEditStudentStatus={() => this.props.turnOnEditStudentStatus(student)}
                removeStudent={() => this.props.removeStudent(student)}
            />
        ))
    }

    checkStatus(){
        switch (this.props.appState.status) {
            case "ADD":
                return <AdminAddStudentForm
                            addStudent={(student) => this.props.addStudent(student)}
                        />
            case "EDIT":
                return <AdminEditStudentForm
                            studentEditing={this.props.appState.studentEditing}
                            editStudent={(student) => this.props.editStudent(student)}
                        />
            default:
                break;
        }
    }
    
    render() {
        return (
            <div className="admin">
                <h1>Welcome to admin</h1>
                <table className="admin_table">
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Username</th>
                            <th>Password</th> 
                            <th>Họ tên</th>
                            <th>Giới tính</th>
                            <th>Lớp</th>
                            <th>Số buổi học</th>
                            <th>Điểm</th>
                            <th>Chức năng</th>
                        </tr>
                        {this.mapStudents()}
                    </tbody>
                </table>
                {this.checkStatus()}
            </div>
        );
    }
}

export default Admin;