import _ from "lodash";

import {
  GET_USER,
  GET_USERS,
  DELETE_USER
  // CLEAR_PROFILE,
  // UPDATE_PROFILE,
} from "../actions/types";

export default function(state = {}, action) {
  // Attention!!! The state object here refers to state.profile, instead of the application state.

  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_USERS:
      return _.mapKeys(action.payload, "_id");
    case DELETE_USER:
      return _.omit(state, action.payload);
    //   case CLEAR_PROFILE:  // clear the local redux state
    //     return {};
    //   case UPDATE_PROFILE:
    //     return { ...state, user: action.payload };
    default:
      return state;
  }
}
