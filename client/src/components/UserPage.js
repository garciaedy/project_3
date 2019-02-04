
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';





export default class UserPage extends Component {
  state = {
    users: []
  };
  getAllUsers = () =>{
    axios.get('/api/users').then(res =>{
      this.setState({users: res.data});
    });

    };
    componentDidMount(){
      this.getAllUsers()
    }
    handleDelete = userId =>{
      axios.delete(`/api/users/${userId}`).then(() => {
        const deletedUser = [...this.state.users];
        const filtered =deletedUser.filter(user =>{
          return user._id !== userId;
        })
        this.setState({ users: filtered});
      })
    }
  
  render() {
    return (
      <div className = 'background3'>
            
      { this.state.users.map((user) => (
        <div key={user._id}>
   <Card className = 'card'>
  <CardBody>
    <CardTitle><Link to={`/users/${user._id}/categories`}>{user.username}</Link></CardTitle>
    <CardText className ='cardtext'>{user.image}</CardText>
    <button className='button-c' onClick={() => this.handleDelete(user._id)}>
       Delete
     </button>
  </CardBody>
</Card>
          
        </div>
      )) }

    </div>
  );
}
}
