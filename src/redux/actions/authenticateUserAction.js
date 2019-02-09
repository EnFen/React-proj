import { api } from "../../api/init";
import {
  REQUEST_AUTH_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  AUTH_ERROR_ACTION,
  GET_SESSION_AUTHTOKEN_ACTION,
  NO_SESSION_TOKEN_ACTION,
} from "./constants/types";
// const REQUEST_AUTH_ACTION = 'REQUEST_AUTH_ACTION';

const authenticateUser = (userRoute, postData) => async dispatch => {
  try {
    dispatch({ type: REQUEST_AUTH_ACTION });
    console.log('<ENVIRONMENT>: ', process.env.NODE_ENV)
    const response = await api.post(userRoute, postData);

    // const AuthToken = response.config.headers.Authorization;
    const user = response.data;
    const userToken = { user };
    console.log("Respond from authenticateUser action response.config :>>>>>", response.data);

    console.log("Respond from authenticateUser action response.config.data.email:>>>>>", user);
    sessionStorage.setItem("AuthToken", JSON.stringify(userToken));
    // sessionStorage.setItem("AuthToken", AuthToken.split(" ")[1].trim() );

    dispatch({
      type: AUTH_ACTION,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
};

const logoutUser = () => async dispatch => {
  try {
    await api.get('/users/logout');

    dispatch({
      type: LOGOUT_ACTION,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
}

export const getSessionAuthToken = (authTokenName) => async dispatch => {
  // Fetch data from api with axios.get

  const sessionToken = await sessionStorage.getItem(authTokenName);
  const authToken = JSON.parse(sessionToken);

  if (!authToken || !Object.keys(authToken).length) {
    dispatch({ type: NO_SESSION_TOKEN_ACTION });
    return;
  }

  console.log("getSessionAuthToken >>>", authToken);
  dispatch({
    type: GET_SESSION_AUTHTOKEN_ACTION,
    payload: authToken.user
  });
  //Return load error in case of error
};

export { authenticateUser, logoutUser }
