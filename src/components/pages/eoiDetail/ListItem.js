import React from 'react';
import { List } from 'semantic-ui-react';

const ListItem = (props) => {
    const { color, header, feature, content } = props;
    return (
        <List.Item>
            <List.Content>
                <List.Header style={{ color }}>
                    {header}
                </List.Header>
                {feature}
                {content}
            </List.Content>
        </List.Item>
    );
};

export default ListItem;