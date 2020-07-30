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
              <strong>Role : {this.props.role}</strong>
              <br/>
              <strong>Name : {this.props.name}</strong>
              <br/>
              <br/>
              {this.props.role === "Coach" ? (
                <div>
                  <p>Hello Coach! You are tasked to create specific and effective workouts for athletes.
                    <br/>
                There are four different types of workouts to target: Agility, Endurance, Explosive, Strength
                <br/>
                Every workout consists of four exercises that target one of the these four types
              </p>
                

                <strong>Fields of each exercise:</strong>
                <br/>
                <br/>
                <p>Agility - Description, Sets , Duration/set</p>
                <p>Endurance - Description, Duration</p>
                <p>Explosive - Description , Sets, Reps</p>
                <p>Strength -Description, Weight, Sets, Reps</p>

                </div>
              ) : (
                <div>
                  <p>Welcome athlete!</p>
                  <p>Sportify provides free resources to improve your physical training sessions.
                    <br/>
                    
                    Our workouts have been carefully curated to maximize productivity for your fitness training in these four categories:                   
                    Agility,
                    Endurance,                   
                    Explosiveness,                   
                    Strength
                    <br/>
                    These workouts are further categorized based on their level of difficulty.
                    There are workouts suitable for the novice, intermediate and even advanced athlete.
                    <br/>
                    Each workout consist of four exercises to target your specific training goals
                    <br/>
                    <br/>
                    <strong>Check out "View Exercises" for comprehensive descriptions on how to execute these exercises properly</strong>
                    
                  </p>
                </div>  

              )}
              

              
            </div>

            
          ) : (
            <div>
              <h1>Please Login</h1>
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