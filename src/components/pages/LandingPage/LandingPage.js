import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import { Grid } from 'react-mdl';

import GarageSaleVid from './Youtube'
import InfoPg from './InfoPage';
import FlashMessage from "../../forms/Messages/FlashMessage";
import Footer from '../Footer'


class LandingPage extends Component {

  onClickMore() {
    document.getElementById('info').scrollIntoView()
  }

  render() {
    const { loggedIn, role, sessionEnd } = this.props;

    return (
      <Fragment>
        <Grid className="landing-grid">
          {
            loggedIn && (role === 'user') &&
            <FlashMessage
              color='teal'
              message={'You have signed in successfully...   '}
            />
          }
          {
            sessionEnd &&
            <FlashMessage
              color='teal'
              message={'You have signed out successfully...   '}
            />
          }
          <div className="banner-text">
            <img src="/Assets/WBGS-logo.png" className="logo" alt='WBGS Logo' />
            <hr />
            <GarageSaleVid videoId='SkiTGS_ThA0' />
          </div>
        </Grid>
        <div className="call-to-act">
          <div className="call1">
            <p>WE BELIEVE WE CAN MAKE A POSITIVE IMPACT ON PEOPLE’S LIVES AND
                THE FUTURE OF THE PLANET THROUGH THE EVENTS AND EXPERIENCES WE CREATE.</p>
          </div>
          <div className="call2">
            <Button inverted size="massive" floated="right" onClick={this.onClickMore}> Find out more </Button>
          </div>
        </div>

        <InfoPg />
        <Footer />
      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  role: state.auth.authenticatedUserRole,
  sessionEnd: state.auth.sessionEnd
});

export default connect(mapStateToProps, null)(LandingPage);