import React, {Component} from 'react';
import UserForm from './UserForm';



export default class Login extends Component {
  
  render() {
    return (
      <div>
        <UserForm {...this.props}/>
  
      </div>
    )
  }
}
