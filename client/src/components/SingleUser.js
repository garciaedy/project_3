import React, { Component } from "react";
import VideoGameList from "./videoGameList";
import axios from "axios";
import NewGameForm from "./NewGameForm";
import UpdateUser from "./UpdateUser";
import styled from "styled-components";
import {Button} from 'react-materialize'

const PageStyle = styled.div`
  font-family: "Cabin", sans-serif;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 12px;
  margin: 0px 90px;
`;

export default class SingleUser extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <PageStyle>
          <h1>Welcome to User {this.state.user.name}</h1>
          <img src={this.state.user.image} alt="profile pic" />
          <h3>
            Library Type <br />
            {this.state.user.console}
          </h3>
          <hr />
          <h3>Update User</h3>
          <UpdateUser {...this.props} />
          <hr />
          <VideoGameList {...this.props} />
          <hr /> <br />
          <h3>Create New Library</h3>
          <NewGameForm {...this.props} />
        </PageStyle>
      </div>
    );
  }
}
