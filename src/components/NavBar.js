import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark " >
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background-color: blue;
  .nav-link{
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;