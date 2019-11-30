import { POST_SURVEY_ACTION } from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case POST_SURVEY_ACTION:
      return { ...state, payload };

    default:
      return state;
  }
};
