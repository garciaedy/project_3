import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize'
import styled from 'styled-components'

const FormStyle = styled.div`
color: black;
`;

export default class newCatForm extends Component {
state ={
newCat:{
  name: "",
  genre: "",
  year: "",
  category: "",
  image: ""
}
};
handleChnage = e =>{
  console.log("name",e.target.name);
  console.log("value", e.target.value);
  const createdEntertain ={...this.state.newCat};
  this.setState({newCat: createdEntertain})
}

handleSubmit = event =>{
  event.preventDefault();
  const payload={
    name: this.state.newCat.name,
    genre: this.state.newCat.genre,
    year: this.state.newCat.year,
    category: this.state.newCat.category,
    image: this.state.newCat.image

  };
  const userId = this.props.match.params.userId;
  axios.post(`/api/users/${userId}/categories`, payload).then(res =>{
    console.log(res.data);
    this.props.history.go(`/users/${userId}`);
  })
}


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
