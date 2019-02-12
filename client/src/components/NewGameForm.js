import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize'
import styled from 'styled-components'

const FormStyle = styled.div`
color: black;
`;

export default class NewGameForm extends Component {
  state = {
    newGame: {
      name: "",
      image: "",
      category: "",
      year: "",
      description: ""
    }
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const createdGame = { ...this.state.newGame };
    createdGame[e.target.name] = e.target.value;
    this.setState({ newGame: createdGame });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name: this.state.newGame.name,
      category: this.state.newGame.category,
      image: this.state.newGame.image,
      year: this.state.newGame.year,
      descriprion: this.state.newGame
    };
    const userId = this.props.match.params.userId;
    axios.post(`/api/users/${userId}/videogames`, payload).then(res => {
      console.log(res.data);
      this.props.history.go(`/users/${userId}`);
    }); 
  };

  render() {
    return (
      <div>
        <FormStyle>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Title:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
          
              onChange={this.handleChange}
              value={this.state.newGame.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="category">category:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.category}
              type="text"
              name="category"
            />
            <label htmlFor="year">Year Released:</label>
            <input onChange={this.handleChange} value={this.state.newGame.year} type="text"
              name="year"/>

          </div>
           <div>
            <label htmlFor="description">Description:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.description}
              type="text"
              name="description"
            />
          </div>
        

          <Button className='#7c4dff deep-purple accent-2' type="submit">Create New Library</Button>
        </form>
          </FormStyle>
      </div>
    );
  }
}
