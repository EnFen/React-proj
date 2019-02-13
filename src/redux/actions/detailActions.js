import { api } from "../../api/init";
import {
    FETCH_DETAIL_ACTION,
    DETAIL_ERROR_ACTION
} from "./constants/types";


const fetchEoiDetails = (id) => async dispatch => {
    try {
        const response = await api.get(`/dashboard/${id}`);

        dispatch({
            type: FETCH_DETAIL_ACTION,
            payload: response.data
        });

    } catch (error) {

        dispatch({
            type: DETAIL_ERROR_ACTION,
            payload: error
        });

    };
};

export { fetchEoiDetails };