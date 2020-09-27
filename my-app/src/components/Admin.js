import React, { Component } from 'react';
import "../css/Admin.css";
import AdminAddStudentForm from './AdminAddStudentForm';
import AdminEditStudentForm from './AdminEditStudentForm';
import AdminRowStudent from "./AdminRowStudent";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "ADDSTUDENT"
        }
    }

    renderStudents(){
        return this.props.students.map((student, index) => (
            <AdminRowStudent
                key={index}
                stt={index + 1}
                student={student}
                addStudent={() => {
                    this.setState({
                        status: "ADDSTUDENT"
                    });
                }}
                getEditStudent={() => {
                    this.setState({
                        status: "EDITSTUDENT"
                    });
                    this.props.getEditStudent(student)
                }}
                removeStudent={() => this.props.removeStudent(student)}
            />
        ))
    }

    checkData(){
        if(this.state.studentEditing){
            console.log("YES")
        }
    }

    checkStatus(){
        switch (this.state.status) {
            case "ADDSTUDENT":
                return <AdminAddStudentForm addStudent={(student) => this.props.addStudent(student)}/>
            case "EDITSTUDENT":
                return <AdminEditStudentForm editStudent={this.props.editStudent}/>
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
                            <th>Lớp</th>
                            <th>Số buổi học</th>
                            <th>Điểm</th>
                            <th>Giới tính</th>
                            <th>Chức năng</th>
                        </tr>
                        {this.renderStudents()}
                    </tbody>
                </table>
                {this.checkStatus()}
            </div>
        );
    }
}

export default Admin;