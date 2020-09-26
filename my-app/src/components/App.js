import React, { Component } from 'react';
import '../css/App.css';
import { data } from "../firebaseConfig";
import Admin from './Admin';
import Login from './Login';
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "ADMIN"
    }
  }
  UNSAFE_componentWillMount(){
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
          return <Admin students={this.state.students} />
        }
        break
      case "USER":
        return <User />
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
    console.log(user);
  }

  getData(){
    if(this.state.students.length !== 0){
      let mapData = this.state.students.map((value, key) => {
        return (
          <ul key={key}>
            <li>{value.username}</li>
            <li>{value.password}</li>
            <li>{value.name}</li>
            <li>{value.age}</li>
            <li>{value.gender}</li>
          </ul>
        )
      })
      return mapData
    }
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
