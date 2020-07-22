// currently not in use
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../actions/authActions";

export class loginpage extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",

      msg: null,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    //stops it from doing the normal submit functionality
    e.preventDefault();

    const NewAuth = {
      email: this.state.email,
      password: this.state.password,
    };

    // const sameEmail = this.emailArr.map(email => email === NewUser.email);

    this.props.login(NewAuth);

    //Need a basic way to notify if client if is success or error

    // How to do the bottom thing Async so that it waits for post request to be complete before rerouting to the List
    // window.location = '/loginpage';
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3>Sign in</h3>
        <br />

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="myemail@email.com"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(loginpage);
