import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Form,
  Button,
  Icon,
  List,
  Segment
} from 'semantic-ui-react';

// import {showResults } from './EventForm';

// import {FormSpy } from "react-final-form";

import { getFormState } from "../../../redux/reducers/reduxFormReducer";
// import FormStateToRedux from "../FormStateToRedux";
// import { InputTextArea, InputCheckBox, DropdownMenu } from '../eventFormfields/EventFormfields';


// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// export const showResults = async values => {
//  await sleep(500);
//  window.alert(JSON.stringify(values, undefined, 2));
// }


class Confirm extends Component {

  render() {
    const { handleSubmit, submitting, prevStep } = this.props;
    const { values, invalid, hasValidationErrors } = this.props.state;

    console.log('invalide, submitting, hasValidationErrors', invalid, submitting, hasValidationErrors)
    if (!values) return null;
    const { first_name,
      last_name,
      email,
      organisation,
      description,
      target_value,
      socials,
      volunteers,
      best_time,
      suburb,
      zipCode,
      country,
      local_council_relationship,
      local_council_details,
      key_influencers } = values;
    return (
      <Grid textAlign='center' >
        <Grid.Column width={10}>
          <Segment inverted style={{ textAlign: "justify", padding: 20 }}>
            <Form onSubmit={handleSubmit}>
              <List divided inverted relaxed>

                {/* HOST DETAILS  */}
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      First Name
          </List.Header>
                    {first_name}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Last Name
          </List.Header>
                    {last_name}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Your Email Address
          </List.Header>
                    {email}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Your Organization Name
          </List.Header>
                    {organisation}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Your Social Media Link(s)
          </List.Header>
                    {socials && <h6>{socials.map(s => s.name)}</h6>}
                  </List.Content>
                </List.Item>

                {/* CAUSE  */}
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Description of Event
         </List.Header>
                    {description}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Do you have 6-10 Volunteers?
          </List.Header>
                    {volunteers && <div>Yes</div>}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Your Expected Target
         </List.Header>
                    {target_value}
                  </List.Content>
                </List.Item>

                {/* COMMUNITY  */}
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Suburb
         </List.Header>
                    {suburb}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Postal/Zip Code
         </List.Header>
                    {zipCode}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Country
          </List.Header>
                    {country}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      When Would You like to hold Your Event?
          </List.Header>
                    {best_time}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Do You have a relationship with your local Counci?
          </List.Header>
                    {local_council_relationship && <div>Yes</div>}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Details of Your Local Council
          </List.Header>
                    {local_council_details}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header style={{ color: "teal" }}>
                      Key People Within Your Organization
          </List.Header>
                    {key_influencers}
                  </List.Content>
                </List.Item>
              </List>

              <br />
              {/* <button type="submit" > Submit </button> */}
              <Button animated='fade' color='red' disabled={invalid || submitting || hasValidationErrors}>
                <Button.Content visible>Confirm</Button.Content>
                <Button.Content hidden>Submit</Button.Content>
              </Button>
              <Button animated onClick={prevStep}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
              {/* <Button type='submit' content="Confirm" color='red'  disabled={invalid || submitting || hasValidationErrors}  /> */}
              {/* <Button label="Back" primary={false} style={styles.button} onClick={prevStep} /> */}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const styles = {
  button: { margin: 15 }
}

const mapPropsToTypes = (state, ownProps) => ({
  state: getFormState(state, ownProps.form)
});
export default connect(mapPropsToTypes)(Confirm);
// export default Confirm;

