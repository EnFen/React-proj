import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const RegistrationForm = (props) => {
    const { submit } = props;

    return (
        <Fragment>
            <div className='register-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/Assets/WBGS-logo.png' />
                            Sign up for for a free account
                        </Header>
                        <Form onSubmit={submit} size='large'>
                            <Segment raised>
                                <Form.Input fluid icon='user' iconPosition='left' name='email' placeholder='E-mail address' />
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name='password' type='password' />
                                <Button color='teal' fluid size='large'>Submit</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already have an account?<Link to='/users/login'>Log In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        </Fragment>
    );
};

RegistrationForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default RegistrationForm;