import { combineReducers } from "redux";

import auth from "./authReducer";
import form from "./formReducer";

export default combineReducers({ auth, form });
