import React from 'react';
import { Dropdown } from "semantic-ui-react";

const DashboardFilter = (props) => {
    const { filter } = props;

    return (
        <div className="filter">
            <Dropdown color="red" text="Filter By" icon="filter" floating labeled button className="icon" >
                <Dropdown.Menu>
                    <Dropdown.Item onClick={filter}>
                        See Shortlist
                    </Dropdown.Item>
                    <Dropdown.Item onClick={filter}>
                        See All
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DashboardFilter;