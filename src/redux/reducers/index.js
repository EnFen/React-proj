import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
import reduxFormReducer from "./reduxFormReducer";

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  forms: reduxFormReducer,
});