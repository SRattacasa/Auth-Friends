import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>App to test login</h1>
      <ul>
        <li>
          <Link to='/login'>Login </Link>
        </li>
      </ul>
        <AddFriend></AddFriend>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute exact path="/friendslist" component={FriendsList}></PrivateRoute>
        
      
    </div>
    </Router>
  );
}

export default App;
