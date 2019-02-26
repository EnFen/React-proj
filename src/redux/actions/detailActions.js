import { api } from "../../api/init";
import {
    FETCH_DETAIL_ACTION,
    TOGGLE_ITEM_ACTION,
    UPDATE_DETAIL_ACTION,
    DETAIL_UPDATE_ERROR_ACTION,
    CHANGE_ITEMS_ACTION,
    DETAIL_ERROR_ACTION,
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


const toggleItem = (name) => dispatch => {
    try {

        dispatch({
            type: TOGGLE_ITEM_ACTION,
            payload: name
        });

    } catch (error) {

        dispatch({
            type: DETAIL_ERROR_ACTION,
            payload: error
        });

    };
};


const updateEoiDetails = (id, options) => async dispatch => {
    try {
        const response = await api.put(`/dashboard/${id}`, options);

        dispatch({
            type: UPDATE_DETAIL_ACTION,
            payload: response.data
        });

    } catch (error) {

        dispatch({
            type: DETAIL_UPDATE_ERROR_ACTION,
            payload: error
        });

    };
};


const changeItems = (items) => dispatch => {
    try {

        dispatch({
            type: CHANGE_ITEMS_ACTION,
            payload: items
        });

    } catch (error) {

        dispatch({
            type: DETAIL_ERROR_ACTION,
            payload: error
        });

    };
};



export { fetchEoiDetails, toggleItem, updateEoiDetails, changeItems };