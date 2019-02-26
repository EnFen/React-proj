import {
  REQUEST_AUTH_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  AUTH_ERROR_ACTION
} from "../actions/constants/types";

const initialState = {
  loading: false,
  loggedIn: false,
  authenticatedUserEmail: null,
  authenticatedUserRole: null,
  authErrorType: null,
  authErrorMsg: null,
  sessionEnd: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH_ACTION:
      return {
        ...state,
        loading: true,
        sessionEnd: false
      };
    case AUTH_ACTION:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        authenticatedUserEmail: action.payload.email,
        authenticatedUserRole: action.payload.role,
        authErrorType: null,
        authErrorMsg: null
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        sessionEnd: true,
        authenticatedUserEmail: null,
        authenticatedUserRole: null
      };
    case AUTH_ERROR_ACTION:
      console.log(action.payload.error, action.payload.type)
      return {
        ...state,
        loading: false,
        authErrorType: action.payload.type,
        authErrorMsg: action.payload.error
      };
    default:
      return state;
  }
};
