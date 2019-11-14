import { FETCH_USER_ACTION } from "../actions/types";

const initialState = {
  isSignedIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
