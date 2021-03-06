import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Users from './Users';
import Post from './Post';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Body>
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/imageUpload" component={ImageUpload} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        </Body>
      </>
    );
  }
}

const Body = styled.div`
 padding-top: 2.2em;
`

export default App;

