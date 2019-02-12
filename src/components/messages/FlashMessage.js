import React, { Component } from 'react'
import { Grid, Message } from 'semantic-ui-react'

class FlashMessages extends Component {
  state = { visible: true }

  handleDismiss = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state;
    const { message, color } = this.props;
    return (
      visible
        ? (
          <Grid centered style={{ margin: '2rem auto' }}>
            <Message
              style={{ width: "600px" }}
              color={color}
              size='large'
              onDismiss={this.handleDismiss}
              content={message}
            />
          </Grid>
        )
        : null
    );
  };
};

export default FlashMessages;