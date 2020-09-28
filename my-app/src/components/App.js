import React, { Component } from 'react';
import '../css/App.css';
import Admin from './Admin';
import Login from './Login';
import User from './User';
import { firebaseConfig } from "../firebaseConfig";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: "ADMIN",
      status: "DEFAULT",
      firebaseConfig: firebaseConfig
    }
  }

  UNSAFE_componentWillMount(){
    const data = firebase.database().ref("students");
    data.on("value", (data) => {
      let students = [];
      data.forEach((student) => {
        students.push({
          username: student.key,
          password: student.val().password,
          fullname: student.val().fullname,
          gender: parseInt(student.val().gender),
          class: student.val().class,
          count: student.val().count,
          mark: student.val().mark,
        })
      });
      this.setState({
        students: students
      });
    })
  }

  checkPermission(){
    switch (this.state.permission) {
      case "UNLOGIN":
        if(this.state.students) {
          return <Login getDataFromLogin={(account) => this.getDataFromLogin(account)}/>
        } else break
      case "ADMIN":
        if(this.state.students) {
          return <Admin
                      appState={this.state}
                      turnOnEditStudentStatus={(student) => this.turnOnEditStudentStatus(student)}
                      turnOnAddStudentStatus={() => this.turnOnAddStudentStatus()}
                      addStudent={(student) => this.addStudent(student)}
                      editStudent={(student) => this.editStudent(student)}
                      removeStudent={(student) => this.removeStudent(student)}
                  />
        } else break
      case "USER":
          return <User appState={this.state}/>
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
      alert("Đăng nhập quyền admin thành công!"); 
      this.setState({
        permission: "ADMIN",
      });
    } else {
      alert("Đăng nhập thành công!");
      this.setState({
        permission: "USER",
        user: user
      });
    }
  }

  turnOnAddStudentStatus(){
    if(this.state.status === "ADD"){
      this.setState({
        status: "DEFAULT"
      });
    } else {
      this.setState({
        status: "ADD",
      });
    }
  }

  turnOnEditStudentStatus(student){
    if(this.state.status === "EDIT"){
      this.setState({
        status: "DEFAULT"
      });
    } else {
      this.setState({
        status: "EDIT",
        studentEditing: student
      });
    }
  }

  addStudent(student){
    const data = firebase.database().ref("students/" + student.username);
    data.set(student);
    this.setState({
      status: "DEFAULT"
    });
  }

  editStudent(student){
    const data = firebase.database().ref("students/" + student.username);
    data.set(student);
    this.setState({
      status: "DEFAULT"
    });
  }

  removeStudent(student){
    const data = firebase.database().ref("students");
    data.child(student.username).remove();
  }

  render() {
    return (
      <div className="app">
        {this.checkPermission()}
      </div>
    );
  }
}

export default App;
