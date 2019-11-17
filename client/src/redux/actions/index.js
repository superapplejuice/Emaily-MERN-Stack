import axios from "axios";

import { FETCH_USER_ACTION } from "./types";

// fetch the currently signed in user
export const fetchUserAction = () => async dispatch => {
  // make a request to the API
  const res = await axios.get("/api/current_user");

  // dispatch the action with the fetched user as the payload
  dispatch({ type: FETCH_USER_ACTION, payload: res.data });
};

// send the payment token to BE API
export const handleTokenAction = creditDetails => async dispatch => {
  // make a POST request to send the token to the BE
  // the BE will confirm with Stripe that the payment was successful
  const res = await axios.post("/api/stripe", creditDetails);

  // the res contains the user with the updated amount of credits
  // hence, dispatch the same action that updates the user
  dispatch({ type: FETCH_USER_ACTION, payload: res.data });
};
