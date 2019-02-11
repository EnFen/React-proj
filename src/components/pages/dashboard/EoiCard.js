import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import { dateFormat } from '../../services/textHelpers';
import { Link } from 'react-router-dom';

const EoiCard = (props) => {
    const { data: { _id: id, host, criteria, createdAt } } = props;
    return (
        <Card.Group key={`${id}-card-group`} centered>
            <Card color="red" fluid>
                <Card.Content color="red" className="cardContainer">
                    <Card.Header key={`${id}-card-header`}>{host.first_name}</Card.Header>
                    <Card.Meta key={`${id}-card-created-at`}>{dateFormat(createdAt)}</Card.Meta>
                    <Card.Description>
                        {host.organisation}
                    </Card.Description>
                    <Button className="viewButton" as={Link} animated inverted color="red" to={`/dashboard/${id}`}>
                        <Button.Content visible >VIEW</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    {criteria.shortlisted
                        ? <Image floated="right" size="mini" src="/Assets/WBGS-logo.png" />
                        : <Image floated="right" size="mini" src="/Assets/WBGS-logo dulled.png" />
                    }
                </Card.Content>
            </Card>
        </Card.Group>
    );
};

export default EoiCard;