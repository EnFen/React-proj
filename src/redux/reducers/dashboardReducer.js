import {
  FETCH_DASHBOARD_ACTION,
  FETCH_SHORTLIST_ACTION,
  DASHBOARD_ERROR_ACTION
} from "../actions/constants/types";

const initialState = {
  eventsList: [],
  eventsCount: 0,
  eventError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_ACTION:
      return {
        ...state,
        eventsList: action.payload.data,
        eventsCount: action.payload.count
      };
    case FETCH_SHORTLIST_ACTION:
      return {
        ...state,
        eventsList: action.payload.data,
        eventsCount: action.payload.count
      };
    case DASHBOARD_ERROR_ACTION:
      return {
        ...state,
        eventError: action.payload
      };
    default:
      return state;
  }
};
