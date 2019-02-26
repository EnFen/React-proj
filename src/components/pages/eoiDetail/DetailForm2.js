import React from 'react';
import { Grid, List, Segment, Form, Checkbox } from 'semantic-ui-react';
import ListItem from './ListItem';

const DetailForm2 = (props) => {
    const {
        socialsCheck,
        descCheck,
        volunteerCheck,
        targetCheck,
        locationCheck,
        bestDateCheck,
        keyInfCheck,
        handleToggle
    } = props;
    const color = '#cb3538';

    return (
        <Grid textAlign='center' className="form-grid2">
            <Grid.Column>
                <Segment inverted style={{ textAlign: "justify", background: "grey" }}>
                    <Form>
                        <List divided inverted relaxed>
                            <ListItem
                                color={color}
                                header='The applicant demonstrates upstanding behaviour on all provided social platforms'
                                feature={<Checkbox onChange={handleToggle} checked={socialsCheck} name='socialsCheck' />}
                                content={`${socialsCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The applicants cause aligns with WBGS values and beliefs'
                                feature={<Checkbox onChange={handleToggle} checked={descCheck} name='descCheck' />}
                                content={`${descCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The applicants aim for the event is reasonable and acheivable'
                                feature={<Checkbox onChange={handleToggle} checked={targetCheck} name='targetCheck' />}
                                content={`${targetCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The applicant can provide 6-10 volunteers'
                                feature={<Checkbox onChange={handleToggle} checked={volunteerCheck} name='volunteerCheck' />}
                                content={`${volunteerCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The requested date is reasonable for the applicants community'
                                feature={<Checkbox onChange={handleToggle} checked={bestDateCheck} name='bestDateCheck' />}
                                content={`${bestDateCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The requested location is appropriate to hold a WBGS event'
                                feature={<Checkbox onChange={handleToggle} checked={locationCheck} name='locationCheck' />}
                                content={`${locationCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                            <ListItem
                                color={color}
                                header='The key influencers listed by the applicant are authorised to make decisions in their community'
                                feature={<Checkbox onChange={handleToggle} checked={keyInfCheck} name='keyInfCheck' />}
                                content={`${keyInfCheck ? 'Confirmed' : 'Unconfirmed'}`}
                            />
                        </List>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};



export default DetailForm2;