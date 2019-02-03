import React, { Component } from 'react'
import axios from "axios";
import {Button} from 'react-materialize'


export default class UpdateCat extends Component {
  state ={
    entertainment: []
  }
  componentDidMount() {
    const categoriesId = this.props.match.params.CatId;
    axios.get(`/api/users${userId}`).then(res =>{
      this.setState({ user: res.data});
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
