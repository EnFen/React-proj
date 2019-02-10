import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { authenticateUser, logoutUser } from "../../redux/actions/authenticateUserAction";
import { connect } from "react-redux";

class Authentication extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        // chooses the endpoint for submission based on the form being submitted; either 'register' or 'login'
        const userRoute = this.props.history.location.pathname;

        // data to be posted for authentication
        const postData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        // call the authenticatio dispatch method
        this.props.authenticateUser(userRoute, postData);
    };

    render() {
        const { loggedIn, isLoading, role, error } = this.props
        const authType = this.props.history.location.pathname.split('/')[2];

        return (
            <Fragment>
                {loggedIn && role === 'admin' && <Redirect to='/dashboard' />}
                {loggedIn && role === 'user' && <Redirect to='/' />}
                {authType === 'logout' && <Redirect to='/' />}
                {authType === 'register' && <RegistrationForm loading={isLoading} flash={error} submit={this.handleSubmit} />}
                {authType === 'login' && <LoginForm loading={isLoading} flash={error} submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    user: PropTypes.string,
    role: PropTypes.string,
    error: PropTypes.object
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    isLoading: state.auth.loading,
    user: state.auth.authenticatedUserEmail,
    role: state.auth.authenticatedUserRole,
    error: state.auth.authError,
});

const mapDispatchToProps = {
    authenticateUser,
    logoutUser
};

// redux connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store (all functions) - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
