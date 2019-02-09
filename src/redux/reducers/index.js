import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eventsReducer from "./eventsReducer";
import reduxFormReducer from "./reduxFormReducer";

export default combineReducers({
  auth: authReducer,
  events: eventsReducer,
  forms: reduxFormReducer,
});