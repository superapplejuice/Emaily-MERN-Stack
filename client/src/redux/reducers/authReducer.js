import { FETCH_USER_ACTION } from "../actions/types";

const initialState = {
  isSignedIn: false,
  id: null
};

export default (state = initialState, { type, payload }) => {
  console.log({ type, payload });

  switch (type) {
    default:
      return state;
  }
};
