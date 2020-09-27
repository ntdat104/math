import React, { Component } from 'react';

class AdminEditStudentForm extends Component {
    constructor(props) {
        super(props);
        this.setState({
            username: this.props.editStudent.username,
            password: this.props.editStudent.password,
            fullname: this.props.editStudent.fullname,
            grade: this.props.editStudent.grade,
            count: this.props.editStudent.count,
            mark: this.props.editStudent.mark,
            gender: this.props.editStudent.gender
        });
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
    }
    
    render() {
        return (
            <form className="admin_form" onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Sửa học sinh</h1>
                <div className="admin_form_group">
                    <label htmlFor="username">Username</label>
                    <input name="username" defaultValue={this.state.username} id="username" type="text" onChange={(e) => this.handleChange(e)} required/> 
                </div>
                <div className="admin_form_group">
                    <label htmlFor="password">Password</label>
                    <input name="password" defaultValue={this.state.password} id="password" type="password" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="admin_form_group">
                    <label htmlFor="fullname">Họ tên</label>
                    <input name="fullname" defaultValue={this.state.fullname} id="fullname" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="admin_form_group">
                    <label htmlFor="grade">Lớp</label>
                    <input name="grade" defaultValue={this.state.grade} id="grade" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="admin_form_group">
                    <label htmlFor="count">Số buổi học</label>
                    <input name="count" defaultValue={this.state.count} id="count" type="number" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="admin_form_group">
                    <label htmlFor="mark">Điểm</label>
                    <input name="mark" defaultValue={this.state.mark} id="mark" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="admin_form_group">
                    <label htmlFor="gender">Giới tính</label>
                    <select name="gender" defaultValue={this.state.gender} id="gender" onChange={(e) => this.handleChange(e)} required>
                        <option value="">Chọn giới tính</option>
                        <option value={0}>Nam</option>
                        <option value={1}>Nữ</option>
                    </select>
                </div>
                <div className="admin_form_btn">
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default AdminEditStudentForm;