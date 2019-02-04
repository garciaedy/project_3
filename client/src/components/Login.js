import React, {Component} from 'react';
import NewUserForm from './NewUserForm'



export default class Login extends Component {
  render() {
    return (
      <div>
        <NewUserForm {...this.props}/>
      </div>
    )
  }
}
