import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
// import { Provider } from "react-redux";
// import store from "./store";
// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Single from "./pages/Single";
// import Service from "./pages/Service";
// import Gallery from "./pages/Gallery";

// import Footer from "./component/Footer";
import Cart from "./container/Cart";
import Event from "./container/Event";
import Index from "./container/Index";
import Verifysend from "./container/verification";
import Forgot from "./container/forgotpassword";
import RequireAuth from "./component/auth/require_auth";
import Schedule from "./container/Schedule";
import Shop from "./container/Shop";
import Speaker from "./container/Speaker";
import Home from "./container/Home";
import Login from "./container/signin";
import Signup from "./container/signup";

import Dashboard from "./container/Dashboard";
import Vendor from "./container/Vendor";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authentication";
// import { BrowserRouter as Router } from "react-router-dom";

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);
import { AUTH_USER } from "./actions/types";
import rootReducer from "./reducers";

const middleware = [reduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const token = localStorage.getItem("token");
// If we have a token, consider the user to be signed in
if (token) {
  // We need to update application state
  store.dispatch({ type: AUTH_USER });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot" component={Forgot} />

              <Route path="/index" component={RequireAuth(Index)} />
              <Route path="/verifysend" component={RequireAuth(Verifysend)} />
              <Route path="/dashboard" component={RequireAuth(Dashboard)} />
              <Route path="/schedule" component={RequireAuth(Schedule)} />
              <Route path="/vendor" component={RequireAuth(Vendor)} />
              <Route path="/cart" component={RequireAuth(Cart)} />
              <Route path="/event" component={RequireAuth(Event)} />
              <Route path="/shop" component={RequireAuth(Shop)} />
              <Route path="/speaker" component={RequireAuth(Speaker)} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
