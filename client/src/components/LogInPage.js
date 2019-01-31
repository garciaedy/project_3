import React, { Component } from 'react'
import axios from 'axios'
import SingUpForm from './SingUpForm'
import styled from 'styled-components'

const Postion = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

  display: flex;
  justify-content: center;
  font-family: 'Amatic SC', cursive;
  `

export default class LogInPage extends Component {
state ={
    users:[]
}

getAllUsers = () =>{
    axios.get('/api/user').then((res) =>{
        this.setState({users: res.data})
    })
}
  componentDidMount() {
        this.getAllUsers()
    }



  render() {
    return (
        <div>
        <Postion>
        <h1>Your Collection</h1>
        </Postion>
        

        <SingUpForm />
      </div>
    );
  }
}
