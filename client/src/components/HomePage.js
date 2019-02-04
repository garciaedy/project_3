import React, { Component } from 'react';
import NewUserForm from './NewUserForm';


class HomePage extends Component {
  render() {
    return (
      <div>
      <h1>Library Tracker</h1>
      <NewUserForm props={this.props} />
      </div>
    );
  }
}

export default HomePage;