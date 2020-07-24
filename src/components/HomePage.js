import React, { Component } from 'react';
import { connect } from "react-redux";

export class HomePage extends Component {
  render() {
    return (
      <div>

    

        {this.props.isAuthenticated ? (
            <div>
              <h1 style={{ textDecoration: 'underline' }}>Welcome to Sportify</h1>
              <br/>
              <h3>Role : {this.props.role}</h3>
              <br/>
              <h3>Name : {this.props.name}</h3>
            </div>

            
          ) : (
            <div>
            </div>
          )
            
          }

    
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.user === null ? "Athlete" : state.auth.user.role,
  name: state.auth.user === null ? 'name' : state.auth.user.name
});

export default connect(mapStateToProps, {})(HomePage);