import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import UserPage from './components/UserPage'
import HomePage from './components/HomePage'
import CatList from './components/CatList'
import SingleUser from './components/SingleUser'
import SingleCat from './components/SingleCat'
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
      <div className="App">
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/users" component={UserPage} />
            <Route
              exact
              path="/users/:userId/categories"
              component={CatList}
            />
            <Route exact path="/users/:userId" component={SingleUser} />
            <Route
              exact
              path="/users/:userId/categories/:categoriesId"
              component={SingleCat}
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}


export default App;
