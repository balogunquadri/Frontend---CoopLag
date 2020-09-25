import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./auth_reducer";
import profileReducer from "./profile_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import passwordReducer from "./password_reducer";
import userReducer from "./user_reducer";
import fairReducer from "./fair_reducer";

const rootReducer = combineReducers({
  form: formReducer, // the form property of state is going to be produced by ReduxForm reducer
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  comments: commentsReducer,
  password: passwordReducer,
  user: userReducer,
  fair: fairReducer
});

export default rootReducer;
