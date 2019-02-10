import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';
import PropTypes from 'prop-types';
import { logoutUser } from "../../redux/actions/authenticateUserAction";
import { connect } from 'react-redux';

class Nav extends Component {

    // Logout a logged in user
    handleLogOut = event => {
        this.props.logoutUser();
    };

    render() {
        const { loggedIn, userRole, email } = this.props;

        return (
            <Menu pointing secondary className="sticky" icon='labeled' size='mini' style={{ padding: '0px 20px' }} >

                {/* Link to Home */}
                <Menu.Item as={NavLink} exact to='/' name='home' style={inactiveMenuItem} activeClassName="active red" >
                    <Icon name='home' />HOME
                </Menu.Item>

                {/* Link to Dashboard; Only available to authorised admins */}
                {loggedIn && userRole === 'admin' &&
                    <Menu.Item as={NavLink} to='/dashboard' name='dashboard' style={inactiveMenuItem} activeClassName="active red" >
                        <Icon name='users' />DASHBOARD
                    </Menu.Item>
                }

                {/* Link to Application Form - CTA; Not required for admin user  */}
                {userRole !== 'admin' &&
                    <Menu.Item as={NavLink} to='/apply' name='apply' style={inactiveMenuItem} activeClassName="active red"  >
                        <Icon name='add circle' />APPLY
                    </Menu.Item>
                }

                {/* Auth Menus; Shows login menu if not yet logged in, or logout menu if already logged in */}
                {loggedIn
                    ? <LogoutMenu email={email} onLogOut={this.handleLogOut} />
                    : <LoginMenu style={inactiveMenuItem} />
                }
            </Menu>
        );
    };
};

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    userRole: PropTypes.string,
    email: PropTypes.string,

};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    userRole: state.auth.authenticatedUserRole,
    email: state.auth.authenticatedUserEmail,

})

// In component styling
const inactiveMenuItem = {
    fontFamily: 'Raley, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#9d9d9d'
}

// connect function takes two arguments;
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default withRouter(connect(mapStateToProps, { logoutUser })(Nav));
