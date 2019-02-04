import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import NewUserForm from './NewUserForm'


export default class SingleCat extends Component {
  state = {
    user: {},
    categories:[]
        
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
      <div>
      <NewUserForm {...this.props}/>
      </div>
      <div>
       {this.state.user.username}
      
      </div>
      </div>
    );
  }
}
