import React, { Fragment, Component } from 'react';
import GarageSaleVid from './Youtube';
import { Grid } from 'react-mdl';
import { Button } from 'semantic-ui-react';
import InfoPg from './InfoPage';

class LandingPage extends Component {

  handleClick() {
    document.getElementById('info').scrollIntoView()
  };

  render() {
    return (
      <Fragment>
        <Grid className="landing-grid">
          <div className="banner-text">
            <img src="/Assets/WBGS-logo.png" className="logo" alt='WBGS Logo' />
            <hr />
            <GarageSaleVid videoId='SkiTGS_ThA0' />
          </div>
        </Grid>
        <div className="call-to-act">
          <div className="call1">
            <p>WE BELIEVE WE CAN MAKE A POSITIVE IMPACT ON PEOPLE’S LIVES AND THE FUTURE OF THE PLANET THROUGH THE EVENTS AND EXPERIENCES WE CREATE.</p>
          </div>
          <div className="call2">
            <Button inverted size="massive" floated="right" onClick={this.handleClick}> Find out more </Button>
          </div>
        </div>
        <InfoPg />
      </Fragment>
    )
  }
};

export default LandingPage;