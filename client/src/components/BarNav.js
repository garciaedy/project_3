import React, { Component } from 'react';


      

class BarNav extends Component {
    render() {
        return (
          

          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Portfolio </a>
              <ul class="left hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/signup">Sing Up </a></li>
                <li><a href="/users">Users</a></li>
                <li class="active"><a href="/profile/33">User</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default BarNav;