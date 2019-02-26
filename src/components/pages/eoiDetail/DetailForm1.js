import React from 'react';
import { Grid, List, Segment, Form} from 'semantic-ui-react';
import ListItem from './ListItem';

const DetailForm1 = (props) => {
    const {
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
        organisation
    } = props;
    const color = '#cb3538';

    return (

        <Grid textAlign='center' className="form-grid1">
            <Grid.Column>
                <Segment inverted style={{ textAlign: "justify" }}>
                    <Form>
                        <List divided inverted relaxed>
                            <ListItem color={color} header='First Name' content={firstName} />
                            <ListItem color={color} header='Last Name' content={lastName} />
                            <ListItem color={color} header='Email Address' content={email} />
                            <ListItem color={color} header='Organisation' content={organisation} />
                            <ListItem color={color} header='Socials' content={socials.map((socials, index) => <p key={index}>{socials}</p>)} />
                            <ListItem color={color} header='Applicant Description' content={description} />
                            <ListItem color={color} header='6-0 Volunteers Available' content={volunteers ? <p>yes</p> : <p>no</p>} />
                            <ListItem color={color} header='Target Amount' content={`$${target}`} />
                            <ListItem color={color} header='Selected Event Date' content={bestTime} />
                            <ListItem color={color} header='Selected Event Location' content={`${location[0]},${location[1]},${location[2]} `} />
                            <ListItem color={color} header='Existing Relationship with Local Council?' content={councilRelationship ? <p>yes</p> : <p>no</p>} />
                            {councilRelationship &&
                            <ListItem color={color} header='Local Council Details' content={councilDetails} />
                            }
                            <ListItem color={color} header='Key People in the Community / Organisation' content={keyInfluencers.map((keyInfluencers, index) => <p key={index}>{keyInfluencers}</p>)} />
                        </List>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default DetailForm1;