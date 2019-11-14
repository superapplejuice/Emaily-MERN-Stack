import axios from "axios";

import { FETCH_USER_ACTION } from "./types";

// fetch the currently signed in user
export const fetchUserAction = () => async dispatch => {
  // make a request to the API
  const currentUser = await axios.get("/api/current_user");

  // dispatch the action with the fetched user as the payload
  dispatch({ type: FETCH_USER_ACTION, payload: currentUser });
};
