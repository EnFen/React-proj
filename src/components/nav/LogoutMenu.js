import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import { retrieveUserFromEmail } from '../helperFunctions/textHelpers';

function LogoutMenu(props) {
  const { onLogOut, email, style } = props;
  console.log(email)
  const username = retrieveUserFromEmail(email);

  return (
    <Menu.Item position="right" style={style} >
      <Image avatar spaced="right" src='/Assets/user.png' style={{ marginBottom: 10 }} />
      <Dropdown pointing="top right" text={username} >
        <Dropdown.Menu>
          {/* <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Settings" icon="settings" /> */}
          <Dropdown.Item as={NavLink} to='/' onClick={onLogOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
};


export default LogoutMenu;
