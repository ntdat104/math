import React, { Component } from 'react';
import "../css/Admin.css";
import Row from "./Row";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // usernameEdit: this.props.studentEditing.username,
            // passwordEdit: this.props.studentEditing.password,
            // fullnameEdit: this.props.studentEditing.fullname,
            // gradeEdit: this.props.studentEditing.grade,
            // countEdit: this.props.studentEditing.count,
            // markEdit: this.props.studentEditing.mark,
            // genderEdit: this.props.studentEditing.gender
        }
    }

    mapData(){
        return this.props.students.map((student, index) => (
            <Row key={index} stt={index} student={student} editStudent={() => this.props.editStudent(student)} removeStudent={() => this.props.removeStudent(student)}/>
        ))
    }
    
    handleChange(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
    this.setState({
        [name]: value,
    });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let student = {
            username: this.state.username.toLowerCase(),
            password: this.state.password.toLowerCase(),
            fullname: this.state.fullname,
            grade: this.state.grade,
            count: this.state.count,
            mark: this.state.mark,
            gender: parseInt(this.state.gender)
        };
        this.props.addNewStudent(student);
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
                        {this.mapData()}
                    </tbody>
                </table>
                <form className="admin_form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h1>Thêm học sinh</h1>
                    <div className="admin_form_group">
                        <label htmlFor="username">Username</label>
                        <input name="username" id="username" type="text" onChange={(e) => this.handleChange(e)} required/> 
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="fullname">Họ tên</label>
                        <input name="fullname" id="fullname" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="grade">Lớp</label>
                        <input name="grade" id="grade" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="count">Số buổi học</label>
                        <input name="count" id="count" type="number" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="mark">Điểm</label>
                        <input name="mark" id="mark" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="gender">Giới tính</label>
                        <select name="gender" id="gender" onChange={(e) => this.handleChange(e)} required>
                            <option value={0}>Nam</option>
                            <option value={1}>Nữ</option>
                        </select>
                    </div>
                    <div className="admin_form_btn">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
                <form className="admin_form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h1>Sửa học sinh</h1>
                    <div className="admin_form_group">
                        <label htmlFor="usernameEdit">Username</label>
                        <input name="usernameEdit" id="usernameEdit" type="text" onChange={(e) => this.handleChange(e)} required/> 
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="passwordEdit">Password</label>
                        <input name="passwordEdit" id="passwordEdit" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="fullnameEdit">Họ tên</label>
                        <input name="fullnameEdit" id="fullnameEdit" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="gradeEdit">Lớp</label>
                        <input name="gradeEdit" id="gradeEdit" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="countEdit">Số buổi học</label>
                        <input name="countEdit" id="countEdit" type="number" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="markEdit">Điểm</label>
                        <input name="markEdit" id="markEdit" type="text" onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="genderEdit">Giới tính</label>
                        <select name="genderEdit" id="genderEdit" onChange={(e) => this.handleChange(e)} required>
                            <option value={0}>Nam</option>
                            <option value={1}>Nữ</option>
                        </select>
                    </div>
                    <div className="admin_form_btn">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Admin;