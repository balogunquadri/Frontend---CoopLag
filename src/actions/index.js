import axios from "axios";
import { reset } from "redux-form";
import {
  AUTH_USER,
  UNAUTH_USER,
  VERIFY_USER,
  VERIFY_ACCOUNT,
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  GET_USER,
  GET_USERS,
  DELETE_USER,
  CREATE_FAIR,
  FETCH_PROFILE,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  UPDATE_POST,
  DELETE_POST,
  CHECK_AUTHORITY,
  CREATE_COMMENT,
  FETCH_COMMENTS
} from "./types";

const ROOT_URL = "/api";

/**
 * Authentication
 */

export function signinUser({ email, password }, historyPush, historyReplace) {
  // Using redux-thunk (instead of returning an object, return a function)
  // All redux-thunk doing is giving us arbitrary access to the dispatch function, and allow us to dispatch our own actions at any time we want
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post("https://cooplagfair.herokuapp.com/api/v1/users/login", {
        email,
        password
      }) // axios returns a promise
      .then(response => {
        // If request is good (sign in succeeded) ...

        // - Save the JWT token (use local storage)
        localStorage.setItem("token", response.data.token);

        // - Update state to indicate user is authenticated
        dispatch({
          type: AUTH_USER,
          payload: response.data.username
        });

        // - Redirect (PUSH) to the route '/posts'
        historyPush("/index");
      })
      .catch(() => {
        // If request is bad (sign in failed) ...

        // - Redirect (REPLACE) to the route '/signin', then show an error to the user
        historyReplace("/login", {
          time: new Date().toLocaleString(),
          message: "The email and/or password are incorrect."
        });
      });
  };
}

export function signupUser(
  { username, firstname, lastname, email, phoneNumber, password },
  historyPush,
  historyReplace
) {
  // console.log({ username, firstname, lastname, email, phoneNumber, password })
  return function(dispatch) {
    axios
      .post("https://cooplagfair.herokuapp.com/api/v1/users/register", {
        username,
        firstname,
        lastname,
        email,
        phoneNumber,
        password
      }) // axios returns a promise
      .then(response => {
        // If request is good (sign up succeeded) ...

        // - Redirect (PUSH) to the route '/signin', then show a success message to the user
        historyPush("/login", {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      })
      .catch(({ response }) => {
        // If request is bad (sign up failed) ...

        // - Redirect (REPLACE) to the route '/signup', then show an error to the user
        historyReplace("/signup", {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

export function signoutUser() {
  // - Delete the JWT token from local storage
  localStorage.removeItem("token");

  // - Update state to indicate the user is not authenticated
  return { type: UNAUTH_USER };
}

//Verify User
export function verifyUser({ phoneNumber }, historyPush, historyReplace) {
  return function(dispatch) {
    axios
      .post("https://cooplagfair.herokuapp.com/api/v1/verification/send", {
        phoneNumber
      },
      {
        headers: { authorization: localStorage.getItem("token") } // require auth
      }
    )
      .then(response => {
        // If request is good (sign in succeeded) ...

        // - Save the JWT token (use local storage)
        // localStorage.setItem("token", response.data.token);

        // - Update state to indicate user is authenticated
        dispatch({
          type: VERIFY_USER,
          payload: response.data.message
        });

        // - Redirect (PUSH) to the route '/posts'
        historyPush("/index");
      })
      .catch(() => {
        // If request is bad (sign in failed) ...

        // - Redirect (REPLACE) to the route '/signin', then show an error to the user
        historyReplace("/", {
          time: new Date().toLocaleString(),
          message: "Verification code is incorrect."
        });
      });
  };
}

//VerifyAccount
export function verifyAccount(
  { verificationCode },
  historyPush,
  historyReplace
) {
  return function(dispatch) {
    axios
      .post("https://cooplagfair.herokuapp.com/api/v1/users/verification/verify-account", {
        verificationCode
      },
      {
        headers: { authorization: localStorage.getItem("token") } // require auth
      }
    )
      .then(response => {
        // If request is good (sign in succeeded) ...

        // - Save the JWT token (use local storage)
        localStorage.setItem("token", response.data.token);

        // - Update state to indicate user is authenticated
        dispatch({
          type: VERIFY_ACCOUNT,
          payload: response.data.message
        });

        // - Redirect (PUSH) to the route '/posts'
        historyPush("/index");
      })
      .catch(() => {
        // If request is bad (sign in failed) ...

        // - Redirect (REPLACE) to the route '/signin', then show an error to the user
        historyReplace("/", {
          time: new Date().toLocaleString(),
          message: "Verification Unsuccesful."
        });
      });
  };
}

//reset password
export function resetPwd(
  { ResetToken, password, confirmPassword },
  historyReplace
) {
  return function(dispatch) {
    axios
      .patch("https://cooplagfair.herokuapp.com/api/v1/user/reset_password", {
        ResetToken,
        password,
        confirmPassword
      },
      {
        headers: { authorization: localStorage.getItem("token") } // require auth
      }
      
    )
      .then(response => {
        dispatch({
          type: UPDATE_PASSWORD,
          payload: response.data
        });
        historyReplace(`/`, {
          status: "success",
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      })
      .catch(({ response }) => {
        historyReplace("/reset", {
          status: "fail",
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

//forgot password
export function forgotPwd({ phoneNumber }, historyReplace) {
  return function(dispatch) {
    axios
      .post("https://cooplagfair.herokuapp.com/api/v1/users/forgot-password", {
        phoneNumber
      },
      {
        headers: { authorization: localStorage.getItem("token") } // require auth
      })
      .then(response => {
        dispatch({
          type: FORGOT_PASSWORD,
          payload: response.data
        });
        historyReplace(`/reset`, {
          status: "success",
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      })
      .catch(({ response }) => {
        historyReplace("/forgot", {
          status: "fail",
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

//Get Users

export function GetUser(id) {
  return function(dispatch) {
    axios.get("https://cooplagfair.herokuapp.com/api/v1/users/id" , {
      headers: { authorization: localStorage.getItem("token") }
    }).then(response => {
      // console.log(response);
      dispatch({
        type: GET_USER,
        payload: response.data
      });
    });
  };
}

//Get Users

export function getUsers() {
  return function(dispatch) {
    axios.get("https://cooplagfair.herokuapp.com/api/v1/users", {
      headers: { authorization: localStorage.getItem("token") }
    }).then(response => {
      dispatch({
        type: GET_USERS,
        payload: response.data
      });
    });
  };
}

//Delete User
export function deleteUser(id, historyPush) {
  return function(dispatch) {
    axios
      .delete("https://cooplagfair.herokuapp.com/api/v1/users/id", {
        headers: { authorization: localStorage.getItem("token") } // require auth
      })
      .then(response => {
        dispatch({
          type: DELETE_USER,
          payload: id
        });
        historyPush("/");
      });
  };
}

//Create Fair

export function createFair(
  {
    fair_env,
    payment_options,
    fair_type,
    total_expected_vendors,
    banner,
    partners,
    logo,
    name,
    start_date,
    end_date,
    category,
    about_event
  },
  historyPush,
  historyReplace
) {
  return function(dispatch) {
    axios
      .post(
        `${ROOT_URL}/v1/fairs`,
        {
          fair_env,
          payment_options,
          fair_type,
          total_expected_vendors,
          banner,
          partners,
          logo,
          name,
          start_date,
          end_date,
          category,
          about_event
        },
        {
          headers: { authorization: localStorage.getItem("token") } // require auth
        }
      )
      .then(response => {
        // If create post succeed, navigate to the post detail page
        dispatch({
          type: CREATE_FAIR,
          payload: response.data
        });
        historyPush(`/v1/fairs/${response.data._id}`);
      })
      .catch(({ response }) => {
        // If create post failed, alert failure message
        historyReplace("/posts/new", {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

export function verifyJwt() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/verify_jwt`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        dispatch({
          type: AUTH_USER,
          payload: response.data.username
        });
      });
  };
}

/**
 * User information
 */

export function fetchProfile() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/profile`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        dispatch({
          type: FETCH_PROFILE,
          payload: response.data.user
        });
      });
  };
}

export function clearProfile() {
  return { type: CLEAR_PROFILE };
}

export function updateProfile(
  {
    firstName,
    lastName,
    birthday,
    sex,
    phone,
    address,
    occupation,
    description
  },
  historyReplace
) {
  return function(dispatch) {
    axios
      .put(
        `${ROOT_URL}/profile`,
        {
          // req.body (2nd parameter)
          firstName,
          lastName,
          birthday,
          sex,
          phone,
          address,
          occupation,
          description
        },
        {
          // header (3rd parameter)
          headers: { authorization: localStorage.getItem("token") } // require auth
        }
      )
      .then(response => {
        // Update profile success
        // - Update profile
        dispatch({
          type: UPDATE_PROFILE,
          payload: response.data.user
        });
        // - Update username for header
        dispatch({
          type: AUTH_USER,
          payload:
            response.data.user.firstName + " " + response.data.user.lastName
        });
        // - history.replace
        historyReplace("/profile", {
          status: "success",
          time: new Date().toLocaleString(),
          message: "You have successfully updated your profile."
        });
      })
      .catch(() => {
        // Update profile failed
        historyReplace("/profile", {
          status: "fail",
          time: new Date().toLocaleString(),
          message: "Update profile failed. Please try again."
        });
      });
  };
}

/**
 * Blog Post
 */

export function fetchPosts() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/posts`).then(response => {
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      });
    });
  };
}

export function createPost(
  { title, categories, content },
  historyPush,
  historyReplace
) {
  return function(dispatch) {
    axios
      .post(
        `${ROOT_URL}/posts`,
        {
          title,
          categories,
          content
        },
        {
          headers: { authorization: localStorage.getItem("token") } // require auth
        }
      )
      .then(response => {
        // If create post succeed, navigate to the post detail page
        dispatch({
          type: CREATE_POST,
          payload: response.data
        });
        historyPush(`/posts/${response.data._id}`);
      })
      .catch(({ response }) => {
        // If create post failed, alert failure message
        historyReplace("/posts/new", {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

export function fetchPost(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/posts/${id}`).then(response => {
      // console.log(response);
      dispatch({
        type: FETCH_POST,
        payload: response.data
      });
    });
  };
}

export function updatePost(
  { _id, title, categories, content },
  onEditSuccess,
  historyReplace
) {
  return function(dispatch) {
    axios
      .put(
        `${ROOT_URL}/posts/${_id}`,
        {
          _id,
          title,
          categories,
          content
        },
        {
          headers: { authorization: localStorage.getItem("token") } // require auth
        }
      )
      .then(response => {
        dispatch({
          type: UPDATE_POST,
          payload: response.data
        });
        onEditSuccess(); // set beingEdit to false
        historyReplace(`/posts/${_id}`, null);
      })
      .catch(({ response }) => {
        historyReplace(`/posts/${_id}`, {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

export function deletePost(id, historyPush) {
  return function(dispatch) {
    axios
      .delete(`${ROOT_URL}/posts/${id}`, {
        headers: { authorization: localStorage.getItem("token") } // require auth
      })
      .then(response => {
        dispatch({
          type: DELETE_POST,
          payload: id
        });
        historyPush("/posts");
      });
  };
}

export function fetchPostsByUserId() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/my_posts`, {
        headers: { authorization: localStorage.getItem("token") } // require auth
      })
      .then(response => {
        dispatch({
          type: FETCH_POSTS,
          payload: response.data
        });
      });
  };
}

/**
 * Blog Comments
 */

export function createComment(
  { comment, postId },
  clearTextEditor,
  historyReplace
) {
  return function(dispatch) {
    axios
      .post(
        `${ROOT_URL}/comments/${postId}`,
        { content: comment },
        {
          headers: { authorization: localStorage.getItem("token") } // require auth
        }
      )
      .then(response => {
        // If success, clear the text editor
        dispatch({
          type: CREATE_COMMENT,
          payload: response.data
        });
        dispatch(reset("comment_new")); // - Clear form value (data)
        clearTextEditor(); // - Clear text editor (UI)
        historyReplace(`/posts/${postId}`, null); // - clear alert message
      })
      .catch(({ response }) => {
        // If fail, render alert message

        // failure reason: un-authenticated
        if (!response.data.message) {
          return historyReplace(`/posts/${postId}`, {
            time: new Date().toLocaleString(),
            message: "You must sign in before you can post new comment."
          });
        }

        // failure reason: comment is empty
        historyReplace(`/posts/${postId}`, {
          time: new Date().toLocaleString(),
          message: response.data.message
        });
      });
  };
}

export function fetchComments(postId) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/comments/${postId}`).then(response => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
      });
    });
  };
}

/**
 * Check authority: Check if the user has the authority to make change to a specific post
 */
export function checkAuthority(postId) {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/allow_edit_or_delete/${postId}`, {
        headers: { authorization: localStorage.getItem("token") } // require auth
      })
      .then(response => {
        dispatch({
          type: CHECK_AUTHORITY,
          payload: response.data.allowChange
        });
      })
      .catch(() => {
        // If an user is un-authorized, he/she cannot make change to any posts
        dispatch({
          type: CHECK_AUTHORITY,
          payload: false
        });
      });
  };
}
