import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const DetailModal = (props) => {
    let { openModal } = props;
    const { handleToggle, handleReject } = props;

    return (
        <Modal open={openModal} size='small'>
            <Modal.Content>
                <form>
                    <label>Reason for Denial:</label><input /*value={this.state.DenialReason} onChange={this.provideDenialReason}*/ name='deniedReason' />
                </form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' onClick={handleToggle} name='openModal' >
                    Cancel
            </Button>
                <Button color='green' onClick={handleReject} >
                    Confirm
            </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default DetailModal;
