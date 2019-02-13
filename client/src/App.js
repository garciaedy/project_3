import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import VideoGameList from "./components/videoGameList";
import SingleUser from "./components/SingleUser";
import SingleGame from "./components/SingleGame";
import { createGlobalStyle } from "styled-components";
import NewUserForm from "./components/NewUserForm";

const Global = createGlobalStyle`
body{
margin: 0;
padding: 0;

}
`;

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
                path="/users/:userId/videogames"
                component={VideoGameList}
              />
              <Route exact path="/users/:userId" component={SingleUser} />
              <Route exact path="/signup" component={NewUserForm} />
              <Route
                exact
                path="/users/:userId/videogames/:videoGamesId"
                component={SingleGame}
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




