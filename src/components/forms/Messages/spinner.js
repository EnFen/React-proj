import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const Spinner = (props) => {
   const { info } = props;
   return (
      <Message icon color='teal'>
         <Icon name='circle notched' loading />
         <Message.Content>
            <Message.Header>{info}</Message.Header>
         </Message.Content>
      </Message>
   );
}

export default Spinner;