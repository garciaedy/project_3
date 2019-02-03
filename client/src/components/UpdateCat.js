import React, { Component } from 'react'
import axios from "axios";
import {Button} from 'react-materialize'


export default class UpdateCat extends Component {
  state ={
    entertainment: []
  }
  componentDidMount() {
    const categoriesId = this.props.match.params.categoriesId;
    const userId = this.props.match.params.userId;
    axios.get(`/api/users${userId}/categories/${categoriesId}`).then(res =>{
      console.log(res.data);
      this.setState({ entertainment: res.data});
    })
  }
    
handleChange = e => {
  console.log("name",e.target.name)
  console.log("value", e.target.value);
  const updatedEntertain = {...this.state.entertainment}
  this.setState({entertainment: updatedEntertain})
}
  handleUpdate = categoriesId => {
    const updatedEntertain = this.state.entertainment;
    const userId = this.props.match.params.userId;
    axios.patch(`/api/user/${userId}/categories/${categoriesId}`, updatedEntertain)
    .then(()=>{
      console.log("updated Cat")
    })
  }
  
  const 
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
