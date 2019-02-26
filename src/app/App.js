import React, { Fragment, Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from '../components/services/ScrollToTop';
import "./App.css";
import Nav from "../components/nav/Nav";
import FlashMessage from "../components/messages/FlashMessage";
import LandingPage from "../components/pages/landingPage/LandingPage";
import AdminDashboard from "../components/pages/dashboard/AdminDashboard";
import EoiDetail from "../components/pages/eoiDetail/EoiDetail";
import ApplicationForm from "../components/forms/events/ApplicationForm";
import Authentication from "../components/auth/Authentication";
import NotFound from "../components/_404/NotFound";
import Spinner from '../components/messages/Spinner';
import Footer from "../components/pages/Footer";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class App extends Component {

  render() {
    const { loading, loggedIn, userRole, sessionEnd, authErrorType, authErrorMsg, eventError, detailError, detailUpdateError, updateMsg } = this.props;

    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Fragment>
              <Nav />
              {authErrorMsg && authErrorType === '/users/login' &&
                < FlashMessage color='red' message={'Wrong email or password...   '} />
              }
              {authErrorMsg && authErrorType === '/users/register' &&
                <FlashMessage color='red' message={"An email with that name is already registered... "} />
              }
              {(eventError || detailError) &&
                <FlashMessage color='red' message={"There was a problem retrieving the requested data... "} />
              }
              {detailUpdateError &&
                <FlashMessage color='red' message={"There was a problem updating the requested data... "} />
              }
              {updateMsg &&
                <FlashMessage color='teal' message={updateMsg} />
              }
              {loggedIn && (userRole === 'user') &&
                <FlashMessage color='teal' message={'You have signed in successfully...   '} />
              }
              {sessionEnd &&
                <FlashMessage color='teal' message={'You have signed out successfully...   '} />
              }
              <Switch>
                <Route exact path="/" component={LandingPage} />
                {loggedIn && userRole === 'admin' && <Route exact path="/dashboard" component={AdminDashboard} />}
                {loggedIn && userRole === 'admin' && <Route path="/dashboard/:id" component={EoiDetail} />}
                {userRole !== 'admin' && <Route path="/apply" component={ApplicationForm} />}
                <Route path="/users/register" component={Authentication} />
                <Route path="/users/login" component={Authentication} />
                <Route path="/users/logout" component={Authentication} />
                <Route component={NotFound} />
              </Switch>
              {loading &&
                <div className='spinner' style={{ maxWidth: 425, margin: '1em auto' }}>
                  <Spinner info='Just one moment' />
                </div>
              }
              <Route path="/" render={(props) => (props.location.pathname === "/" || props.location.pathname === '/apply') && <Footer />} />
            </Fragment>
          </ScrollToTop>
        </Router>
      </div>
    );
  };
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userRole: PropTypes.string,
  sessionEnd: PropTypes.bool.isRequired,
  authErrorType: PropTypes.string,
  authErrorMsg: PropTypes.string,
  eventError: PropTypes.object,
  detailError: PropTypes.object,
  updateMsg: PropTypes.string,
  detailUpdateError: PropTypes.object
};

const mapPropsToTypes = state => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
  userRole: state.auth.authenticatedUserRole,
  sessionEnd: state.auth.sessionEnd,
  authErrorType: state.auth.authErrorType,
  authErrorMsg: state.auth.authErrorMsg,
  eventError: state.dashboard.eventError,
  detailError: state.detail.detailError,
  updateMsg: state.detail.updateMsg,
  detailUpdateError: state.detail.detailUpdateError
});

export default connect(mapPropsToTypes, null)(App);
