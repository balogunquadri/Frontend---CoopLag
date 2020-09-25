import {
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  VERIFY_USER
  //   UPDATE_PROFILE
} from "../actions/types";

export default function(state = {}, action) {
  // Attention!!! The state object here refers to state.profile, instead of the application state.

  switch (action.type) {
    case UPDATE_PASSWORD:
      return { ...state, user: action.payload };

    case VERIFY_USER:
      return { ...state, user: action.payload };
    //   case CLEAR_PROFILE:  // clear the local redux state
    //     return {};
    case FORGOT_PASSWORD:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
