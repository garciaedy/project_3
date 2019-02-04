import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components'

const FormStyles = styled.div`
  
  width: 500px;
  `

export default class NewUserForm extends Component {
  state ={
   
    username: "",
    password: "",
        image:""
  
    };
    handleChange = (event)  => {
      const {name, value}  = event.target
      this.setState({[name]: value})
      // console.log("name", e.target.name);
      // console.log("value", e.target.value);
      // const updatedNewUser = {...this.state.newUser};
      // updatedNewUser[e.target.name] =e.target.value;
      // this.setState({newUser: updatedNewUser})
  
    };
    handleSubmit = (event) =>{
      event.preventDefault()
      // const payload ={
      // name: this.state.newUser.name,
      // password: this.state.newUser.password,
      // image:this.state.newUser.image,
      // };
      // axios.post("/api/users",payload).then(res =>{
      //   console.log(res.data);
      //   this.props.history.push(`/users/${res.data._Id}`);
      // });
      axios.post('/api/users',this.state).then(res =>{
        console.log(res.data)
        this.props.history.push(`/users`)
      })
    }
  
  render() {
    return (
      <FormStyles>
               <Form  onSubmit={this.handleSubmit}>
               <FormGroup>

               <div>
            <Label htmlFor="username">User Name: </Label>
            <Input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          </div>
          </FormGroup>


          <FormGroup>
          <div>
            <Label htmlFor="password">Password: </Label>
            <Input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
          </div>
          <button className = "buttonL" type="submit">Create User</button>
          </FormGroup>
        </Form>
      
                
        </FormStyles>
    )
  }
}
