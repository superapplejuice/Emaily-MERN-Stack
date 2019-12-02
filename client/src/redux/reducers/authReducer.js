import { FETCH_USER_ACTION } from '../actions/types'

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_USER_ACTION:
      // "" is regarded as false
      // if payload === "", return false instead
      return payload || false
    default:
      return state
  }
}
