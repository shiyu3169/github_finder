import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
// Components
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Search GitHub Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search
            clearUsers={this.clearUsers}
            searchUsers={this.searchUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
