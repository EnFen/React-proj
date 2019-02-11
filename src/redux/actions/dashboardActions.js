import { api } from "../../api/init";
import {
  FETCH_DASHBOARD_ACTION,
  FETCH_SHORTLIST_ACTION,
  DASHBOARD_ERROR_ACTION,
} from "./constants/types";

// get dashboard; returns selected fields for list of events as an array, and the total count of all events
const fetchDashboard = (pageNum, limit, isShortlist = false) => async dispatch => {
  try {
    if (!isShortlist) {

      const response = await api.get(`/dashboard?pageNum=${pageNum}&limit=${limit}`);

      dispatch({
        type: FETCH_DASHBOARD_ACTION,
        payload: response.data
      });

    } else {

      const response = await api.get(`/dashboard/shortlist?pageNum=${pageNum}&limit=${limit}`);

      dispatch({
        type: FETCH_SHORTLIST_ACTION,
        payload: response.data
      });

    };

  } catch (error) {

    dispatch({
      type: DASHBOARD_ERROR_ACTION,
      payload: error
    });

  };
};

export { fetchDashboard };