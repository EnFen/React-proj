import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const LoadingInfoMessage = (props) => (
   <Message icon color='teal'>
  <Icon name='circle notched' loading />
  <Message.Content>
   <Message.Header>{props.info}</Message.Header>
    </Message.Content>
 </Message>
)

export default LoadingInfoMessage