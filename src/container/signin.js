import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "../component/HomeFooter";
import Header from "../component/HomeHeader";
import { reduxForm, Field } from "redux-form";
import { signinUser } from "../actions";

// import { loginUser } from "../actions/authentication";

// import classnames from "classnames";
class Signin extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      // if the user already signed in, navigate to '/posts'
      this.props.history.replace("/index");
    }
  }

  handleFormSubmit({ email, password }) {
    // console.log(email, password);
    // need to do something to log user in
    this.props.signinUser(
      { email, password },
      path => {
        // callback 1: history push
        this.props.history.push(path);
      },
      (path, state) => {
        // callback 2: history replace
        this.props.history.replace(path, state);
      }
    );
  }

  renderField = field => (
    <fieldset className="form-group">
      {/*<label>{field.label}</label>*/}
      <input
        className="form-control"
        placeholder={field.label}
        {...field.input}
        type={field.type}
        required="required"
      />
    </fieldset>
  );

  renderAlert() {
    const { state } = this.props.history.location;
    const { action } = this.props.history;

    // message: successfully signed up, you can sign in
    if (state && action === "PUSH") {
      return (
        <div className="alert alert-success" role="alert">
          {`[${state.time}] --- `} <strong>Congratulations!</strong>{" "}
          {state.message}
        </div>
      );
    }

    // message: sign in failed
    if (state && action === "REPLACE") {
      return (
        <div className="alert alert-danger" role="alert">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }
  render() {
    // these properties comes from ReduxForm
    const { handleSubmit } = this.props;

    return (
      <>
        <Header />
        {this.renderAlert()}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-4"></div>
            <div className="col-lg-4 col-xl-4 col-md-4 p-3">
              <h5 style={{ fontWeight: "bold" }} className="text-danger">
                Sign In
              </h5>
              <form
                className="form-signin"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              >
                <div className="form-group pt-1 pl-1 form-div">
                  <label
                    className="form-label-text"
                    for=""
                    style={{ fontSize: "14px", marginBottom: "2px" }}
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    label="Email"
                    className="form-control form-input-field"
                    component={this.renderField}
                    style={{
                      border: "0px",
                      padding: "5px",
                      lineHeight: "1.0",
                      height: "30px"
                    }}
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <label className="form-label-text" for="">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control form-input-field"
                    component={this.renderField}
                    label="Password"
                    style={{
                      border: "0px",
                      padding: "5px",
                      lineHeight: "1.0",
                      height: "30px"
                    }}
                  />
                </div>
                <div className="form-group pt-1 pl-1">
                  <button
                    className="btn btn-block text-white"
                    style={{
                      fontWeight: "bold",
                      background: "linear-gradient(to right, red, yellow)"
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <h6 className="forgot-password-item ">
                <a href="forgot-password.html" className="text-primary">
                  Forgot Password ?
                </a>
              </h6>
              <h6 className="text-muted bg-muted">
                Not yet registered?{" "}
                <Link
                  to="/signup"
                  className="text-danger"
                  id="close-sign-in-btn-trigger"
                  style={{ cursor: "pointer" }}
                >
                  Sign up
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

Signin = reduxForm({
  form: "signin" // name of the form
})(Signin);

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, { signinUser })(Signin);
// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });
