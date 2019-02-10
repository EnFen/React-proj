import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "../components/nav/Nav";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import EOIDetail from "../components/dashboard/EOIDetail";
import ApplicationForm from "../components/forms/events/ApplicationForm";
import Authentication from "../components/auth/Authentication";
import NotFound from "../components/_404/NotFound";
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    const { loggedIn, userRole } = this.props;

    return (
      <div className="App">
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              {loggedIn && userRole === 'admin' && <Route exact path="/dashboard" component={AdminDashboard} />}
              {loggedIn && userRole === 'admin' && <Route path="/dashboard/:id" component={EOIDetail} />}
              {userRole !== 'admin' && <Route path="/apply" component={ApplicationForm} />}
              <Route path="/users/register" component={Authentication} />
              <Route path="/users/login" component={Authentication} />
              <Route path="/users/logout" component={Authentication} />
              <Route component={NotFound} />
            </Switch>
            {/* WHy not put footer here?? */}
          </Fragment>
        </Router>
      </div>
    );
  };
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userRole: PropTypes.string
};

const mapPropsToTypes = state => ({
  loggedIn: state.auth.loggedIn,
  userRole: state.auth.authenticatedUserRole
});

export default connect(mapPropsToTypes, null)(App);
