import React, { Component } from 'react';
import "./Admin.css";
import AdminAddStudentForm from './AdminAddStudentForm';
import AdminEditStudentForm from './AdminEditStudentForm';
import Search from './Search/Search';
import RowStudent from "./RowStudent/RowStudent";

class Admin extends Component {
    showStudents(){
        switch (this.props.appState.admin.searchStatus) {
            case true:
                return this.props.appState.admin.listStudent.map((student, index) => (
                    <RowStudent 
                        key={index}
                        stt={index + 1}
                        student={student}
                        turnOnEditStudentStatus={() => this.props.turnOnEditStudentStatus(student)}
                        removeStudent={() => this.props.removeStudent(student)}
                    />
                ))
            default:
                return this.props.appState.students.map((student, index) => (
                    <RowStudent 
                            key={index}
                            stt={index + 1}
                            student={student}
                            turnOnEditStudentStatus={() => this.props.turnOnEditStudentStatus(student)}
                            removeStudent={() => this.props.removeStudent(student)}
                    />
                ))
        }
    }

    addStatus(){
        if(this.props.appState.admin.addStatus){
            return <AdminAddStudentForm 
                        addStudent={(student) => this.props.addStudent(student)}
                    />
        }
    }

    editStatus(){
        if(this.props.appState.admin.editStatus){
            return <AdminEditStudentForm
                        studentEditing={this.props.appState.studentEditing}
                        editStudent={(student) => this.props.editStudent(student)}
                    />
        }
    }
    
    render() {
        return (
            <div className="admin">
                <h1>Welcome to admin</h1>
                <Search getStudentSearch={(username) => this.props.getStudentSearch(username)}/>
                <button className="admin_add-student">Thêm mới</button>
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
                        {this.showStudents()}
                    </tbody>
                </table>
                {this.addStatus()}
                {this.editStatus()}
            </div>
        );
    }
}

export default Admin;