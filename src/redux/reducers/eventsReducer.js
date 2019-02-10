import {
  FETCH_EVENTS_ACTION,
  LOAD_EVENTS_ACTION,
  EVENTS_FETCH_ERROR_ACTION
} from "../actions/constants/types";
// FAKER DATA TO BE REMOVED
import initialFakeUsers from "../../components/pages/dashboard/fakeData";

const initialState = {
  eventsList: initialFakeUsers,
  eventError: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_ACTION:
      return {
        eventsList: action.payload.eventsList,
        eventError: false
      };

    // THIS CASE, BELOW IS FOR TESTING PURPOSES AND IS TO BE REMOVED
    case LOAD_EVENTS_ACTION:
      console.log('LOAD_EVENT_ACTION', state)
      return {
        ...state,
        //  eventList:
        eventError: false
      };
    case EVENTS_FETCH_ERROR_ACTION:
      return {
        ...state,
        eventError: action.payload.error
      };
    default:
      return state;
  }
};
