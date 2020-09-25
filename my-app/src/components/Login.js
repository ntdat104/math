import React, { Component } from 'react';
import "../css/Login.css";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <form className="login_form">
                    <h1>Lớp Anh Đạt</h1>
                    <div className="input-group">
                        <input type="text" id="username" required />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;