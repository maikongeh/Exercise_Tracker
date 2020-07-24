import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Button,
} from "reactstrap";
import Register from "./registration";
import RegisterModal from "./auth/RegisterModal";

import { connect } from "react-redux";
import { logout } from "../actions/authActions";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/homepage" className=" navbar-brand">
          {" "}
          ExerciseTracker
        </Link>
        {this.props.isAuthenticated ? (
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {this.props.role === 'Coach' ? (
                    <li className="navbar-item">
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        My Workouts
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link to="/AgWorkout">Agility</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/EnWorkout">Endurance</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/ExWorkout">Explosive</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/StrWorkout">Strength</Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>

                ) : (
                    <li className="navbar-item">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    All Workouts
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/AgWorkout">Agility</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/EnWorkout">Endurance</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/ExWorkout">Explosive</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/StrWorkout">Strength</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>

                )}
              {this.props.role === "Coach" && (
                <li className="navbar-item">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Create Workout
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to="/AgList">Agility</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link to="/EnList">Endurance</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link to="/ExList">Explosive</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link to="/StrList">Strength</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              )}
  
              <li className="navbar-item">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    View Exercises
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/AllAg">Agility</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/AllEn">Endurance</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/AllEx">Explosive</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/AllStr">Strength</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
  
            
  
        
                <Fragment className = "navbar-item">
                    <NavItem>
                    <span className = "navbar-text mr-3">
                        <strong>Welcome {this.props.name}</strong>
                    </span>
                    </NavItem>
            
              <NavItem>
                  <button className="float-right" onClick={() => this.props.logout()}>Logout</button>              
              </NavItem>
              </Fragment>
            
          </div>

        ) : (
            <div>
                <ul className="navbar-nav ml-auto">
                <li className="navbar-item">
                  <button>
                    <Link to="/login">Login </Link>
                  </button>
                </li>
                <br />
  
                <li className="navbar-item">
                  <button>
                    <Link to="/registration"> Register</Link>
                  </button>
                </li>
              </ul>
            </div>
        )}
        
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.user === null ? "Athlete" : state.auth.user.role,
  name: state.auth.user === null ? 'name' : state.auth.user.name
});

export default connect(mapStateToProps, { logout })(Navbar);
