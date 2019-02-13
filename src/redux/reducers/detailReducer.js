import {
    FETCH_DETAIL_ACTION,
    DETAIL_ERROR_ACTION
} from "../actions/constants/types";

const initialState = {
    isOpen: false,
    location: [],
    keyInfluencers: [],
    description: '',
    volunteers: false,
    target: '',
    bestTime: '',
    councilRelationship: false,
    councilDetails: '',
    socials: [],
    firstName: '',
    lastName: '',
    organisation: '',
    socialsCheck: false,
    descCheck: false,
    volunteerCheck: false,
    targetCheck: false,
    locationCheck: false,
    bestDateCheck: false,
    keyInfCheck: false,
    shortlisted: false,
    denied: false,
    deniedReason: '',
    detailError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_ACTION:
            return {
                ...state,
                location: action.payload.location,
                keyInfluencers: action.payload.key_influencers,
                description: action.payload.description,
                volunteers: action.payload.volunteers,
                target: action.payload.target_value,
                bestTime: action.payload.best_time,
                councilRelationship: action.payload.local_council_relationship,
                councilDetails: action.payload.local_council_details,
                socials: action.payload.host.socials,
                firstName: action.payload.host.first_name,
                lastName: action.payload.host.last_name,
                organisation: action.payload.host.organisation,
                email: action.payload.host.user.email,
                socialsCheck: action.payload.criteria.socials_check,
                descCheck: action.payload.criteria.description_check,
                volunteerCheck: action.payload.volunteers_check,
                targetCheck: action.payload.target_value_check,
                locationCheck: action.payload.location_check,
                bestDateCheck: action.payload.best_date_check,
                keyInfCheck: action.payload.key_influencers_check,
                shortlisted: action.payload.shortlisted,
                denied: action.payload.denied,
                deniedReason: action.payload.denied_reason
            };
        case DETAIL_ERROR_ACTION:
            return {
                ...state,
                detailError: action.payload
            };
        default:
            return state;
    }
};
