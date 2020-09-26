import React, { Component } from 'react';
import '../css/App.css';
import Admin from './Admin';
import Login from './Login';
import User from './User';
import { config } from "../firebaseConfig";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "ADMIN"
    }
  }
  UNSAFE_componentWillMount(){
    console.log(config);
    const data = firebase.database().ref("students");
    data.on("value", (data) => {
      let students = [];
      data.forEach((student) => {
        students.push({
          username: student.key,
          password: student.val().password,
          fullname: student.val().fullname,
          grade: student.val().grade,
          count: student.val().count,
          mark: student.val().mark,
          gender: student.val().gender,
        })
      });
      this.setState({
        students: students
      });
    })
  }

  checkStatus(){
    switch (this.state.status) {
      case "LOGIN":
        return <Login getDataFromLogin={(account) => this.getDataFromLogin(account)} />
      case "ADMIN":
        if(this.state.students) {
          return <Admin students={this.state.students} studentEditing={this.state.studentEditing} editStudent={(student) => this.editStudent(student)} addNewStudent={(student) => this.addNewStudent(student)} removeStudent={(student) => this.removeStudent(student)}/>
        }
        break
      case "USER":
        if(this.state.students) {
          return <User />
        }
        break
      default:
        break
    }
  }

  getDataFromLogin(account){
    let user = null;
    this.state.students.forEach((student) => {
      if(account.username === student.username){
        user = student
      }
    });
    if(user === null){
      return alert("Username không tồn tại.");
    }
    if(user.password !== account.password){
      return alert("Sai mật khẩu.");
    }
    if(user.username === "admin"){
      alert("Đăng nhập quyền admin thành công.");
      this.setState({
        status: "ADMIN",
        key: account.username
      });
    } else {
      alert("Đăng nhập quyền user thành công.");
      this.setState({
        status: "USER",
        key: account.username
      });
    }
  }

  editStudent(student){
    this.setState({
      studentEditing: student
    });
    console.log(student)
  }

  addNewStudent(student){
    const data = firebase.database().ref("students/" + student.username);
    data.set(student);
    console.log(student);
  }

  removeStudent(student){
    const data = firebase.database().ref("students");
    data.child(student.username).remove();
    console.log(student);
  }

  render() {
    return (
      <div className="app">
        {this.checkStatus()}
      </div>
    );
  }
}

export default App;
