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
    axios.patch(`/api/users/${userId}/categories/${categoriesId}`, updatedEntertain)
    .then(()=>{
      console.log("updated Cat")
    })
  }
  
  const 
  render() {
    return (
      <div>
      <form onSubmit={() => this.handleUpdate(this.state.entertainment._id)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.entertainment.name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            onChange={this.handleChange}
            value={this.state.entertainment.image}
            type="text"
            name="image"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.entertainment.password}
            type="text"
            name="password"
          />
        </div>
        <div>
          <label htmlFor="year">The Year it Released</label>
          <input
            onChange={this.handleChange}
            value={this.state.entertainment.year}
            type="text"
            name="year"
          />
        </div>
        
        <Button className='#880e4f pink darken-4' type="submit">Update Game</Button>
      </form>
    </div>
  );
}
}
