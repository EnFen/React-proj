import React from 'react'
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
} from 'semantic-ui-react';
import { FormSpy, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
// import {showResults } from './EventForm';

// import FormStateToRedux from "../FormStateToRedux";
import { InputText, RenderSocials } from '../eventFormfields/EventFormfields';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}

function HostDetailsForm(props) {
  const { values, handleSubmit, nextStep, page } = props;
  console.log('HandleSubmit...', values)
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          {/* <FormStateToRedux form="userForm" /> */}
          <Header sub style={styles.DodgerRed} content='Your Details' />
          <Form onSubmit={handleSubmit} >
            <Form.Field>
              <Field
                name='first_name'
                placeholder='First Name'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name='last_name'
                type='text'
                placeholder='Last Name'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name='email'
                type='email'
                label='Email address'
                // style={{color: '#cb3538'}}
                icon='at'
                iconPosition='left'
                component={InputText}
                placeholder='Email Address'
                subscription={{ value: true, active: true, error: true, touched: true }}
              >
              </Field>
            </Form.Field>
            <Form.Field>
              <Field
                name='organisation'
                type='text'
                placeholder='Your Organization'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <FieldArray
                name='socials'
                type='text'
                component={RenderSocials}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <FormSpy subscription={{ values: true, errors: true }}>
              {({ values, errors }) => (
                !page && <Button
                  type='button'
                  label="Continue"
                  color='red'
                  disabled={((Object.keys(values).length < 4)) || !values.socials}
                  onClick={nextStep}
                />

              )}

            </FormSpy>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

const styles = {
  DodgerRed: {
    color: '#9d9d9d',
    fontWeight: 'bold',
    marginBottom: 10
  }
}
export default HostDetailsForm;
