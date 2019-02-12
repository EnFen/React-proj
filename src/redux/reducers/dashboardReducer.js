import {
  FETCH_DASHBOARD_ACTION,
  FETCH_SHORTLIST_ACTION,
  DASHBOARD_ERROR_ACTION
} from "../actions/constants/types";

const initialState = {
  eventsList: [],
  eventsCount: 0,
  showShortlist: false,
  eventError: null,
  pageNum: 1, // set default page number to first page
  limitPerPage: 10 // set default items per page to 10; this will be able to be changed in a future iteration
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_ACTION:
      return {
        ...state,
        eventsList: action.payload.data,
        eventsCount: action.payload.count,
        showShortlist: false,
        pageNum: action.payload.pageNum,
        limitPerPage: action.payload.limit,
        eventError: null
      };
    case FETCH_SHORTLIST_ACTION:
      return {
        ...state,
        eventsList: action.payload.data,
        eventsCount: action.payload.count,
        showShortlist: true,
        pageNum: action.payload.pageNum,
        limitPerPage: action.payload.limit,
        eventError: null
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
