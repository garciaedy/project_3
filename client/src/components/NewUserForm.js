import React, { Component } from "react";
import axios from "axios";
import {Button,} from 'react-materialize'


export default class NewUserForm extends Component {
  state = {
    newUser: {
      name: "",
      image: "",
      category: ""
    }
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name: this.state.newUser.name,
      category: this.state.newUser.category,
      image: this.state.newUser.image
    };
    axios.post("/api/users", payload).then(res => {
      console.log(res.data);
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <h3>Become A User</h3> <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">NickName</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="category">Library</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.category}
              type="text"
              name="category"
            />
          </div>
          <Button class="btn-floating btn-large waves-effect waves-light red" type="submit">Create User</Button>
        </form>
      </div>
    );
  }
}
