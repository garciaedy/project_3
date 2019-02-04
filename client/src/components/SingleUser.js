import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import NewCatForm from "./NewCatForm";
import UpdatedUser from "./UpdatedUser"
import CatList from "./CatList"



const PageStyle = styled.div`
  font-family: "Cabin", sans-serif;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: url("http://static.tumblr.com/e60b248ae9bd68cb888034e7bb7d3b2f/o0cmdl5/qf7ndgrdb/tumblr_static_7yzz7mm0sz4sk4swok00cko4w.png");
  border-radius: 12px;
  padding: 12px;
  margin: 0px 90px;
`;

export default class SingleCat extends Component {
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
          <h1>Welcome to {this.state.user.name}'s profile page</h1>
          <img src={this.state.user.image} alt="profile pic" />
          <h3>
            Console of Preferences: <br />
            {this.state.user.password}
          </h3>
          <hr />
          <h3>Update User</h3>
          <UpdatedUser {...this.props} />
          <hr />
          <CatList {...this.props} />
          <hr /> <br />
          <h3>Create New Game Choice</h3>
          <NewCatForm {...this.props} />
        </PageStyle>
      </div>
    );
  }
}
