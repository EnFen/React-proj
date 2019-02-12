import { api } from "../../api/init";
import {
  REQUEST_AUTH_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  AUTH_ERROR_ACTION,
} from "./constants/types";

const authenticateUser = (userRoute, postData) => async dispatch => {
  try {
    // Authenticate user
    dispatch({
      type: REQUEST_AUTH_ACTION
    });

    const response = await api.post(userRoute, postData);

    dispatch({
      type: AUTH_ACTION,
      payload: response.data
    });

  } catch (error) {

    const authenticateError = { error, type: userRoute };

    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: authenticateError
    });

  };
};

const logoutUser = () => async dispatch => {
  try {
    // logout authenticated user
    dispatch({
      type: REQUEST_AUTH_ACTION
    });

    await api.get('/users/logout');

    dispatch({
      type: LOGOUT_ACTION,
    });

  } catch (error) {

    const logoutError = { error, type: 'logout' };

    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: logoutError
    });

  };
};

export { authenticateUser, logoutUser };
