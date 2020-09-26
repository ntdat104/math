import React, { Component } from 'react';
import "../css/Admin.css";
import Row from "./Row";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 0
        }
    }

    mapData(){
        return this.props.students.map((student, index) => (
            <Row key={index} stt={index} student={student}/>
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
        console.log(this.state);
    }
    
    render() {
        console.log(this.props.students);
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
                    <h1>Form nhập liệu</h1>
                    <div className="admin_form_group">
                        <label htmlFor="username">Username</label>
                        <input name="username" id="username" type="text" onChange={(e) => this.handleChange(e)}/> 
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="text" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="fullname">Họ tên</label>
                        <input name="fullname" id="fullname" type="text" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="grade">Lớp</label>
                        <input name="grade" id="grade" type="text" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="count">Số buổi học</label>
                        <input name="count" id="count" type="number" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="mark">Điểm</label>
                        <input name="mark" id="mark" type="text" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="admin_form_group">
                        <label htmlFor="gender">Giới tính</label>
                        <select name="gender" id="gender" defaultValue={this.state.gender} onChange={(e) => this.handleChange(e)}>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                        </select>
                    </div>
                    <div className="admin_form_btn">
                        <button type="submit">Submit</button>
                        <button type="button">Add</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Admin;