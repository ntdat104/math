import React, { Component } from 'react';
import '../css/App.css';
import { data } from "../firebaseConfig";
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  componentWillMount(){
    data.on("value", (data) => {
      let students = [];
      data.forEach((student) => {
        students.push({
          username: student.key,
          password: student.val().password,
          name: student.val().name,
          age: student.val().age,
          gender: student.val().gender,
        })
      });

      this.setState({
        students: students
      });
    })
  }

  getData = () => {
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
        <Login />
      </div>
    );
  }
}

export default App;
