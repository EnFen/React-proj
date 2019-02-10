import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function LoginMenu(props) {
  const { style } = props;
  return (
    <Menu.Menu position="right">
      {/* Link to Login; Only seen by logged out users */}
      <Menu.Item as={NavLink} to='/users/login' name='login' style={style} activeClassName="active red" >
        <Icon name='sign in' />LOGIN
      </Menu.Item>
      {/* Link to Register: Only seen by logged out users*/}
      <Menu.Item as={NavLink} to='/users/register' name='register' style={style} activeClassName="active red" >
        <Icon name='user plus' />REGISTER
      </Menu.Item>
    </Menu.Menu>
  )
};

LoginMenu.propTypes = {
  style: PropTypes.object.isRequired
};

export default LoginMenu;
