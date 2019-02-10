import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'



class InfoPage extends Component {
    render() {
        return (
            <Fragment>
                <div id="info" className="info-grid">
                    <div className="people">
                        <h1>COMMUNITY</h1>
                        <img className="content" src="Assets/People.jpg" alt="People" />
                        <ul>314K raised for charity so far</ul>
                        <ul>730 Volunteers over 5 years</ul>
                        <ul>8,760 Volunteer hours have been dedicated to WBGS events</ul>
                        <ul>3,300 tonnes of goods donated</ul>
                    </div>
                    <div className="planet">
                        <h1>ENVIROMENT</h1>
                        <img className="content" src="Assets/Enviroment.jpg" alt="Planet" />
                        <ul>594,000kgs of CO2 prevented from entering Earth's atmosphere</ul>
                        <ul>Prevented approx 8250kgs of pesticides and chemicals from being used in production of new goods by recycling & reusing.</ul>
                    </div>
                    <div className="purpose">
                        <h1>WASTE</h1>
                        <img className="content" src="Assets/waste.jpg" alt="Purpose" />
                        <ul>An estimated potential benefit of AU$360,974 to the global economy by diverting waste from landfill and incineration</ul>
                        <ul>165 thousand kgs of garments diverted from landfill </ul>
                    </div>
                </div>
                <div className="call-to-act">
                    <div className="call1">
                        <p>WE ARE LOOKING FOR ORGANIZATIONS WHO WANT TO ADD TO THERE COMMUNITY, BENEFIT THE PLANET AND ACTIVATE THE CIRCULAR ECONOMY IN THERE COMMUNITY.</p>
                    </div>
                    <div className="call2">
                        <Button inverted size="massive" floated="right" as={Link} to='/apply'> Apply for an Event in your Community </Button>
                    </div>
                </div>
            </Fragment>
        )
    };
};

export default InfoPage;



