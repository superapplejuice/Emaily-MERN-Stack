import { combineReducers } from "redux";

import auth from "./authReducer";
import survey from "./surveyReducer";

export default combineReducers({ auth, survey });
