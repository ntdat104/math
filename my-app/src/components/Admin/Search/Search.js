import React, { Component } from 'react';
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    
    handleChange(e) {
        this.setState({
            username: e.target.value.trim().toLowerCase()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getStudentSearch(this.state.username);
    }

    render() {
        return (
            <form className="admin-search" onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="search">Tìm kiếm</label>
                <input type="text" id="search" placeholder="username" onChange={(e) => this.handleChange(e)}/>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;