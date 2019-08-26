import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className='fab fa-github' /> GitHub Finder
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
