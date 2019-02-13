import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
import detailReducer from "./detailReducer";
import reduxFormReducer from "./reduxFormReducer";

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  detail: detailReducer,
  forms: reduxFormReducer,
});