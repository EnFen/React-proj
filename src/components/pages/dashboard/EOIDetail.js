import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Grid,
    List,
    Segment,
    Header,
    Form,
    Checkbox,
    Button,
    Modal 
} from 'semantic-ui-react';
import { api } from '../../api/init';

export default class EOIDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            location: [],
            keyInfluencers: [],
            description: '',
            volunteers: false,
            target: '',
            bestTime: '',
            councilRelationship: false,
            councilDetails: '',
            socials: [],
            firstName: '',
            lastName: '',
            organisation: '',
            socialsCheck: false,
            descCheck: false,
            volunteerCheck: false,
            targetCheck: false,
            locationCheck: false,
            bestDateCheck: false,
            keyInfCheck: false,
            shortlisted: false,
            denied: false,
            deniedReason: ''
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/dashboard/${id}`);
        const {
            location,
            key_influencers: keyInfluencers,
            description,
            volunteers,
            target_value: target,
            best_time: bestTime,
            local_council_relationship: councilRelationship,
            local_council_details: councilDetails,
            host: {
                socials,
                first_name: firstName,
                last_name: lastName,
                organisation,
                user: {email},
            },
            criteria: {
                socials_check: socialsCheck,
                description_check: descCheck,
                volunteers_check: volunteerCheck,
                target_value_check: targetCheck,
                location_check: locationCheck,
                best_date_check: bestDateCheck,
                key_influencers_check: keyInfCheck,
                shortlisted,
                denied,
                denied_reason: deniedReason
            }
        } = response.data
        this.setState({
            email,
            location,
            keyInfluencers,
            description,
            volunteers,
            target,
            bestTime,
            councilRelationship,
            councilDetails,
            socials,
            firstName,
            lastName,
            organisation,
            socialsCheck,
            descCheck,
            volunteerCheck,
            targetCheck,
            locationCheck,
            bestDateCheck,
            keyInfCheck,
            shortlisted,
            denied,
            deniedReason
        });

        

    }

    

    handleAcptShort = async () => {
            this.setState({ shortlisted: true})
            
            const { id } = this.props.match.params;
            const response= await api.put(`/dashboard/${id}`, 
            { socials_check: this.state.socialsCheck,
                description_check: this.state.descCheck,
                volunteers_check: this.state.volunteerCheck,
                target_value_check: this.state.targetCheck,
                location_check: this.state.locationCheck,
                best_date_check: this.state.bestDateCheck,
                key_influencers_check: this.state.keyInfCheck,
                shortlisted: true ,
                denied: this.state.denied,
                denied_reason: this.state.deniedReason}) 
                console.log(response.data)
    }

    handleUpdate = async () => {
        const { id } = this.props.match.params;
            const response= await api.put(`/dashboard/${id}`, 
            { socials_check: this.state.socialsCheck,
                description_check: this.state.descCheck,
                volunteers_check: this.state.volunteerCheck,
                target_value_check: this.state.targetCheck,
                location_check: this.state.locationCheck,
                best_date_check: this.state.bestDateCheck,
                key_influencers_check: this.state.keyInfCheck,
                denied: this.state.denied,
                denied_reason: this.state.deniedReason}) 
                console.log(response.data)
                this.props.history.push('/dashboard')

    }

    handleRemoveShortlist = async () => {
        const { id } = this.props.match.params;
        this.setState({shortlisted: false})
        const response= await api.put(`/dashboard/${id}`, 
        { shortlisted: false }) 
            console.log(response.data)


    }

    handleReject = (event) => {
        event.preventDefault()
        this.setState({denied: true})
        this.setState({isOpen: true})
        
    }

    handleClose = (event)=>{
        event.preventDefault()
        this.setState({denied: false})
        this.setState({isOpen: false})
    }

    provideDenialReason = (event) => {
        this.setState({ deniedReason: event.target.value })
      }
  


    handleToggle = (evt) => {
        let newState = {}
        switch (evt.target.id) {
            case 'descCheck':
                newState = { descCheck: !this.state.descCheck }
                break;
            case 'socialsCheck':
                newState = { socialsCheck: !this.state.socialsCheck }
                break;
            case 'chk_bel':
                newState = { val_bel: !this.state.val_bel }
                break;
            case 'chk_org':
                newState = { val_org: !this.state.val_org }
                break;
            case 'targetCheck':
                newState = { targetCheck: !this.state.targetCheck }
                break;
            case 'volunteerCheck':
                newState = { volunteerCheck: !this.state.volunteerCheck}
                break;
            case 'bestDateCheck':
                newState = { bestDateCheck: !this.state.bestDateCheck }
                break;
            case 'locationCheck':
                newState = { locationCheck: !this.state.locationCheck }
                break;
            case 'chk_council':
                newState = { val_council: !this.state.val_council }
                break;
            case 'keyInfCheck':
                newState = { keyInfCheck: !this.state.keyInfCheck }
                break;
        }
        this.setState(newState)
    }

    render() {
        console.log('Hello from Confirm Form', this.props)
        const { handleSubmit, prevStep } = this.props;
        const { values } = this.state;

        if (!this.state) return null;
        const { firstName,
            lastName,
            email,
            organisation,
            description,
            volunteers,
            bestTime,
            location,
            socials,
            target,
            councilDetails,
            councilRelationship,
            keyInfluencers,
            denied} = this.state;
        return (
            <div className="form-grid">
                <Grid textAlign='center' className="form-grid1">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify" }}>
                            <Form>
                                <List divided inverted relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                First Name
                                                </List.Header>
                                            {firstName}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Last Name
                                            </List.Header>
                                            {lastName}
                                        </List.Content>

                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Email Address
                                            </List.Header>
                                            {email}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Organization Name
                                            </List.Header>
                                            {organisation}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                socials
                                            </List.Header>
                                            {socials.map((socials, index)=> <p key={index}>{socials}</p>)}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Description of Event
                                            </List.Header>
                                            {description}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do you have 6-10 Volunteers?
                                            </List.Header>
                                            {volunteers ? <p>yes</p> : <p>no</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                what is the targeted profit to be raised from the event?
                                            </List.Header>
                                            {target}k
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                When Would You like to hold Your Event?
                                            </List.Header>
                                            {bestTime}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                location
                                            </List.Header>
                                            {location[0]}, 
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Postal/Zip Code
                                            </List.Header>
                                            {location[1]}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Country
                                            </List.Header>
                                            {location[2]}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do You have a relationship with your local Counci?
                                            </List.Header>
                                            {councilRelationship ? <p>yes</p> : <p>no</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538l" }}>
                                                Details of Your Local Council
                                            </List.Header>
                                            {councilDetails}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Key People Within Your Organization
                                            </List.Header>
                                            {keyInfluencers.map((keyInfluencers, index)=> <p key={index}>{keyInfluencers}</p>)}
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid textAlign='center' className="form-grid2">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify", background: "grey" }}>
                            <Form>
                                <List divided inverted relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Has the host provided social Links, hosts social links have been checked and the host demonstates upstanding bevaiour on these platforms?
                                                </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.socialsCheck} id="socialsCheck" />
                                            {this.state.socialsCheck ? <p>Socials Check Confirmed</p>: <p>Socials Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Does the organization meet and match the key WBGS values and believes.
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.descCheck} id="descCheck" />
                                            {this.state.descCheck ? <p>Description Check Confirmed</p>: <p>Description Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Is the scope and aim of the described event achievable?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.targetCheck} id="targetCheck" />
                                            {this.state.targetCheck ? <p>Target Check Confirmed</p>: <p>Target Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Does the organization have 6-10 volunteers to chair a committee?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.volunteerCheck} id="volunteerCheck" />
                                            {this.state.volunteerCheck ? <p>Volunteers Check Confirmed</p>: <p>Volunteers Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Is the requested date a reasonable to hold a WBGS?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.bestDateCheck} id="bestDateCheck" />
                                            {this.state.bestDateCheck ? <p>Date Check Confirmed</p>: <p>Date Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Is the loaction is feasable to hold a WBGS?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.locationCheck} id="locationCheck" />
                                            {this.state.locationCheck ? <p>Location Check Confirmed</p>: <p>Location Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Are Key people within the organization are able to help WBGS staff arrange the event and are authorized to make decisions?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} checked={this.state.keyInfCheck} id="keyInfCheck" />
                                            {this.state.keyInfCheck ? <p>key People Check Confirmed</p>: <p>Key People Check Unconfirmed</p>}
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid className="form-grid3">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify", background: "#FFFFFF" }}>
                            <img src={this.state.shortlisted ? "/Assets/WBGS-logo.png" : "/Assets/WBGS-logo dulled.png"} className="wbgs-logo" />
                        </Segment>
                        
                    </Grid.Column>
                </Grid>
                <Grid className="form-grid4">
                    <Grid.Column>
                        <Segment floated='right' inverted style={{ textAlign: "justify", background: "#cb3538" }}>
                            <Button.Group>
                                {this.state.shortlisted ? 
                                 <Button onClick={this.handleRemoveShortlist} color={"black"} size={"mini"} >Remove Shortlist</Button>
                                :<Button onClick={this.handleAcptShort} color={"black"} size={"mini"} >Shortlist Candidate</Button>
                                }
                                <Button color="red" size={"mini"} onClick={this.handleReject}>Reject Candidate</Button>
                                <Button color="blue" size={"mini"} onClick={this.handleUpdate}>Update Checks</Button>
                            </Button.Group>
                        </Segment>
                    </Grid.Column>
                </Grid>

                <Link to='/dashboard'><Button color='black'>
                         Back To Dashboard
                </Button></Link>

                <Modal open={this.state.isOpen}  size='small'>
                    <Header />
                    <Modal.Content>
                    <form>
                    <label>Reason for Denial:</label><input value={this.state.DenialReason} onChange={this.provideDenialReason}/>
                    </form>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button basic color='red'  onClick={this.handleClose}>
                         Close
                    </Button>
                    <Button color='green' onClick={this.handleUpdate}>
                         Confirm
                    </Button>
                </Modal.Actions>
            </Modal>
            </div>

        )
    }
}
