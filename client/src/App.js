import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import UserPage from './components/UserPage'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Category from './components/Category'


import { createGlobalStyle } from 'styled-components'


const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Amatic SC', cursive;
    background: white;
  }
`
class App extends Component {
  render() {
    return (
     
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
          <Route exact path= "/login" component ={Login}/>
          <Route exact path= "/users"  component ={UserPage}/>
          <Route exact path= "/users/:userId/categories" component ={Category}/>
        
          <Route path= "/" component ={HomePage}/>
          </Switch>
        </div>
      </Router>

  );
}
}


export default App;
