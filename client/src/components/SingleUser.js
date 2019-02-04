import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";



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
       {this.state.user.username}
      </div>
    );
  }
}
