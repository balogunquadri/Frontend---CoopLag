import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form"; // read new version of ReduxForm
import { signupUser } from "../actions";
// import { connect } from "react-redux";
import Footer from "../component/HomeFooter";
import Header from "../component/HomeHeader";

// import { loginUser } from "../actions/authentication";

// import classnames from "classnames";
class Signup extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      // if the user already signed in, navigate to '/posts'
      this.props.history.replace("/index");
    }
  }

  handleFormSubmit({
    username,
    firstname,
    lastname,
    email,
    phoneNumber,
    password
  }) {
    // Call action creator to sign up the user
    this.props.signupUser(
      { username, firstname, lastname, email, phoneNumber, password },
      (path, state) => {
        // callback 1: history push
        this.props.history.push(path, state);
      },
      (path, state) => {
        // callback 2: history replace
        this.props.history.replace(path, state);
      }
    );
  }

  renderField = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      {/*<label>{label}</label>*/}
      <input
        className="form-control"
        placeholder={label}
        {...input}
        type={type}
        required="required"
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </fieldset>
  );

  renderAlert() {
    const { state } = this.props.history.location;
    const { action } = this.props.history;

    // message: sign up failed
    if (state && action === "REPLACE") {
      return (
        <div className="alert alert-danger">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }

  render() {
    // const { errors } = this.state;
    const { handleSubmit } = this.props;
    return (
      <>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-4"></div>
            <div className="col-lg-4 col-md-4 col-xl-4 p-3">
              <h5 style={{ fontWeight: "bold" }} className="text-danger">
                Create Account
              </h5>
              <form
                className="form-signin"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              >
                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="username"
                    component={this.renderField}
                    type="text"
                    label="User Name"
                    className="form-control form-input-field"
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="firstname"
                    component={this.renderField}
                    type="text"
                    label="First Name"
                    className="form-control form-input-field"
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="lastname"
                    component={this.renderField}
                    type="text"
                    label="Last Name"
                    className="form-control form-input-field"
                  />
                </div>

                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="email"
                    component={this.renderField}
                    type="email"
                    label="E-Mail"
                    className="form-control form-input-field"
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="phoneNumber"
                    component={this.renderField}
                    type="text"
                    label="Phone Number"
                    className="form-control form-input-field"
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <Field
                    name="password"
                    component={this.renderField}
                    type="password"
                    label="PassWord"
                    className="form-control form-input-field"
                  />
                  <Field
                    name="passwordConfirm"
                    component={this.renderField}
                    type="password"
                    label="Confirm PassWord"
                    className="form-control form-input-field"
                  />
                </div>

                <div className="form-group pt-1 pl-1">
                  <h6 className="text-muted text-center">
                    By Click Sign up, you accept terms & Conditions
                  </h6>
                  <button className="btn btn-block text-white form-btn">
                    Create Account
                  </button>
                </div>
              </form>
              <h6 className="text-muted bg-muted">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-danger"
                  id="close-sign-up-btn-trigger"
                  style={{ cursor: "pointer" }}
                >
                  Sign in
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

function validate(formProps) {
  // console.log(formProps);

  const errors = {};

  if (!formProps.email) {
    errors.email = "Please enter an email";
  }
  if (!formProps.password) {
    errors.password = "Please enter an password";
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = "Password must match!";
  }

  return errors;
}

Signup = reduxForm({
  form: "signup",
  validate: validate
})(Signup);

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, { signupUser })(Signup);
