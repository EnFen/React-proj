import React, { Component } from 'react';
import DetailForm1 from './DetailForm1';
import DetailForm2 from './DetailForm2';
import DetailForm3 from './DetailForm3';
import DetailModal from './DetailModal';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchEoiDetails, toggleItem, updateEoiDetails, changeItems } from '../../../redux/actions/detailActions';
import { connect } from 'react-redux';




class EoiDetail extends Component {

    componentDidMount = () => {
        // get id from params
        const { id } = this.props.match.params;

        // get fetchEoiDetails action from props
        const { fetchEoiDetails } = this.props;

        // populate initial form data from passed id
        fetchEoiDetails(id);
    };


    handleToggle = (event) => {
        // get name from target element
        let name;
        if (event.currentTarget.name) {
            name = event.currentTarget.name;
        } else if (event.currentTarget.children[0].name) {
            name = event.currentTarget.children[0].name;
        };

        // get toggleItem action from props
        const { toggleItem } = this.props;

        // pass element name to toggleItem action
        toggleItem(name);
    };


    handleUpdate = async () => {
        // get id from params
        const { id } = this.props.match.params;

        // get the updateEoiDetails action, and history object from props
        const {
            updateEoiDetails,
            history
        } = this.props;

        // Assign the values to be updated to an option object
        const options = {
            socials_check: this.props.socialsCheck,
            description_check: this.props.descCheck,
            volunteers_check: this.props.volunteerCheck,
            target_value_check: this.props.targetCheck,
            location_check: this.props.locationCheck,
            best_date_check: this.props.bestDateCheck,
            key_influencers_check: this.props.keyInfCheck,
            shortlisted: this.props.shortlisted,
            denied: this.props.denied,
            denied_reason: this.props.deniedReason
        };

        // pass the id, and options to the updateEoiDetails action
        await updateEoiDetails(id, options);

        // Redirect to dashboard if application has been denied
        if (this.props.denied) {
            history.push('/dashboard');
        };
    };


    handleShortlist = async (event) => {
        // get name from target element
        const name = event.currentTarget.name; // === 'shortlisted'

        // get toggleItem action from props
        const { toggleItem } = this.props;

        // pass element name to toggleItem action
        await toggleItem(name);

        // immediately update shortlisted criteria on record
        this.handleUpdate();
    };


    handleReject = async () => {
        // get toggleItem and changeItems actions from props
        const { toggleItem, changeItems } = this.props;

        // set denied and denied reason values
        const items = {
            denied: true,
            deniedReason: document.getElementsByName('deniedReason')[0].value
        };

        // change denied and deniedReason in state
        await changeItems(items);

        // close modal
        await toggleItem('openModal');

        // immediately update denied and deniedReason criteria on record
        this.handleUpdate();
    };


    render() {
        // get props to be passed to stateless components
        const {
            openModal,
            email,
            location,
            keyInfluencers,
            description,
            volunteers,
            target,
            bestTime,
            councilRelationship,
            councilDetails,
            socials,
            firstName,
            lastName,
            organisation,
            socialsCheck,
            descCheck,
            volunteerCheck,
            targetCheck,
            locationCheck,
            bestDateCheck,
            keyInfCheck,
            shortlisted,
        } = this.props;

        // get events to be passed to stateless components
        const handleToggle = this.handleToggle;
        const handleShortlist = this.handleShortlist;
        const handleUpdate = this.handleUpdate;
        const handleReject = this.handleReject;

        return (
            <div className="form-grid">

                <DetailForm1
                    email={email}
                    location={location}
                    keyInfluencers={keyInfluencers}
                    description={description}
                    volunteers={volunteers}
                    target={target}
                    bestTime={bestTime}
                    councilRelationship={councilRelationship}
                    councilDetails={councilDetails}
                    socials={socials}
                    firstName={firstName}
                    lastName={lastName}
                    organisation={organisation}
                />

                <DetailForm2
                    socialsCheck={socialsCheck}
                    descCheck={descCheck}
                    volunteerCheck={volunteerCheck}
                    targetCheck={targetCheck}
                    locationCheck={locationCheck}
                    bestDateCheck={bestDateCheck}
                    keyInfCheck={keyInfCheck}
                    handleToggle={handleToggle}
                />

                <DetailForm3
                    shortlisted={shortlisted}
                    handleToggle={handleToggle}
                    handleShortlist={handleShortlist}
                    handleUpdate={handleUpdate}

                />

                <Button as={Link} to='/dashboard' color='black'>
                    Back To Dashboard
                </Button>

                <DetailModal
                    openModal={openModal}
                    handleToggle={handleToggle}
                    handleReject={handleReject}
                />
            </div>
        );
    };
};

EoiDetail.propTypes = {
    openModal: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    keyInfluencers: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    volunteers: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
    bestTime: PropTypes.string.isRequired,
    councilRelationship: PropTypes.bool.isRequired,
    councilDetails: PropTypes.array.isRequired,
    socials: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    organisation: PropTypes.string.isRequired,
    socialsCheck: PropTypes.bool.isRequired,
    descCheck: PropTypes.bool.isRequired,
    volunteerCheck: PropTypes.bool.isRequired,
    targetCheck: PropTypes.bool.isRequired,
    locationCheck: PropTypes.bool.isRequired,
    bestDateCheck: PropTypes.bool.isRequired,
    keyInfCheck: PropTypes.bool.isRequired,
    shortlisted: PropTypes.bool.isRequired,
    denied: PropTypes.bool.isRequired,
    deniedReason: PropTypes.string.isRequired,
    fetchEoiDetails: PropTypes.func.isRequired,
    toggleItem: PropTypes.func.isRequired,
    updateEoiDetails: PropTypes.func.isRequired,
    changeItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    openModal: state.detail.openModal,
    email: state.detail.email,
    location: state.detail.location,
    keyInfluencers: state.detail.keyInfluencers,
    description: state.detail.description,
    volunteers: state.detail.volunteers,
    target: state.detail.target,
    bestTime: state.detail.bestTime,
    councilRelationship: state.detail.councilRelationship,
    councilDetails: state.detail.councilDetails,
    socials: state.detail.socials,
    firstName: state.detail.firstName,
    lastName: state.detail.lastName,
    organisation: state.detail.organisation,
    socialsCheck: state.detail.socialsCheck,
    descCheck: state.detail.descCheck,
    volunteerCheck: state.detail.volunteerCheck,
    targetCheck: state.detail.targetCheck,
    locationCheck: state.detail.locationCheck,
    bestDateCheck: state.detail.bestDateCheck,
    keyInfCheck: state.detail.keyInfCheck,
    shortlisted: state.detail.shortlisted,
    denied: state.detail.denied,
    deniedReason: state.detail.deniedReason
});

const mapDispatchToProps = {
    fetchEoiDetails,
    toggleItem,
    updateEoiDetails,
    changeItems
};

export default connect(mapStateToProps, mapDispatchToProps)(EoiDetail);