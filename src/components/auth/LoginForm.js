import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Spinner from "../messages/spinner";
import FlashMessage from "../messages/FlashMessage";

const LoginForm = (props) => {
  const { submit, loading, flash } = props;

  return (
    <Fragment>
      {flash &&
        <FlashMessage color='red' message={'Wrong email or password ...   '} />
      }
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/Assets/WBGS-logo.png' />
              Log-in to your account
            </Header>
            <Form onSubmit={submit} size='large'>
              <Segment raised>
                <Form.Input fluid icon='user' iconPosition='left' name='email' placeholder='E-mail address' />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name='password' type='password' />
                <Button color='teal' fluid size='large'>Login</Button>
                {loading && <Spinner info='Just one moment' />}
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/users/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  );
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  flash: PropTypes.object
};

export default LoginForm;