import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBarStyles = styled.div`
display: flex;
justify-content: space-between;
background: #2d9b90;
height: 60px;

a{
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
        color: red;
      }
}
.right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`;
export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" className="some-class"> 
      <Link to="/" >Main</Link>
      <div className="right">
<Link to="/login" > Sing Up</Link>
<Link to="/user" > Forum </Link>
      </div>
      </NavBarStyles>
    )
  }
}
