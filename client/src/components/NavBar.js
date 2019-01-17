import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          <Link to="/post">
          <Menu.Item name="Posts" />
        </Link>
        <Link to="/users">
          <Menu.Item name="Users" />
        </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu as={Background} pointing secondary fixed='top'>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const Background = styled.div`
background: #07FFA8 !important;
padding-bottom: 1.5rem;
padding-top: 1.5rem;
display: flex;
flex-direction: row;
align-items: center;
`

const MenuItem = styled.div`
font-family: 'Balthazar', serif;
font-size: 30px !important;
`

export default withRouter(connect(mapStateToProps)(NavBar));

