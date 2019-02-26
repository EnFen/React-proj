import {
    FETCH_DETAIL_ACTION,
    TOGGLE_ITEM_ACTION,
    UPDATE_DETAIL_ACTION,
    DETAIL_UPDATE_ERROR_ACTION,
    CHANGE_ITEMS_ACTION,
    DETAIL_ERROR_ACTION
} from "../actions/constants/types";

const initialState = {
    openModal: false,
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
    detailError: null,
    updateMsg: null,
    detailUpdateError: null
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
                volunteerCheck: action.payload.criteria.volunteers_check,
                targetCheck: action.payload.criteria.target_value_check,
                locationCheck: action.payload.criteria.location_check,
                bestDateCheck: action.payload.criteria.best_date_check,
                keyInfCheck: action.payload.criteria.key_influencers_check,
                shortlisted: action.payload.criteria.shortlisted,
                denied: action.payload.criteria.denied,
                deniedReason: action.payload.criteria.denied_reason
            };
        case TOGGLE_ITEM_ACTION:
            return {
                ...state,
                [action.payload]: !state[action.payload]
            };
        case UPDATE_DETAIL_ACTION:
            return {
                ...state,
                updateMsg: action.payload
            };
        case DETAIL_UPDATE_ERROR_ACTION:
            return {
                ...state,
                detailUpdateError: action.payload
            };
        case CHANGE_ITEMS_ACTION:
            return {
                ...state,
                ...action.payload
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
