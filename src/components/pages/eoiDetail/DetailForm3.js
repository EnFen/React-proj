import React, { Fragment } from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';

const DetailForm3 = (props) => {
    const { shortlisted, handleToggle, handleShortlist, handleUpdate } = props;

    return (
        <Fragment>
            <Grid className="form-grid3">
                <Grid.Column>
                    <Segment inverted style={{ textAlign: "justify", background: "#FFFFFF" }}>
                        <img src={shortlisted ? "/Assets/WBGS-logo.png" : "/Assets/WBGS-logo dulled.png"} className="wbgs-logo" alt="wbgs-logo" />
                    </Segment>
                </Grid.Column>
            </Grid>

            <Grid className="form-grid4">
                <Grid.Column>
                    <Segment floated='right' inverted style={{ textAlign: "justify", background: "#cb3538" }}>
                        <Button.Group>
                            <Button color="black" size={"mini"} onClick={handleShortlist} name='shortlisted'>{shortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}</Button>
                            <Button color="blue" size={"mini"} onClick={handleUpdate}>Update Application</Button>
                            <Button color="red" size={"mini"} onClick={handleToggle} name='openModal'>Reject Application</Button>
                        </Button.Group>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Fragment>
    )
};

export default DetailForm3;