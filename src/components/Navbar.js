import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import {UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavItem}

        from 'reactstrap';
import Register from './registration';
import RegisterModal from './auth/RegisterModal';

export class Navbar extends Component {
  render() {
    return (
        <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to ="/HomePage" className = " navbar-brand"> ExerciseTracker</Link>
            <div className = "collapse navbar-collapse">
            <ul className = "navbar-nav mr-auto">
                <li className = "navbar-item">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>My Workouts</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to = '/AgWorkout'>Agility</Link>
                                </DropdownItem>
                                <DropdownItem>
                                <Link to = '/EnWorkout'>Endurance</Link>
                                </DropdownItem>
                                <DropdownItem>
                                <Link to = '/ExWorkout'>Explosive</Link>
                                </DropdownItem>
                                <DropdownItem>
                                <Link to = '/StrWorkout'>Strength</Link>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
                <li className = "navbar-item">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Create Workout</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to = '/AgList'>Agility</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/EnList'>Endurance</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/ExList'>Explosive</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/StrList'>Strength</Link>  
                                </DropdownItem>
                                
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
                {/* <li className = "navbar-item">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Create Exercise</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to = '/AgCreate'>Agility</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/EnCreate'>Endurance</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/ExCreate'>Explosive</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/StrCreate'>Strength</Link>
                                </DropdownItem>
                                
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </li> */}
           
                <li className = 'navbar-item'>
                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>View Exercises</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to = '/AllAg'>Agility</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/AllEn'>Endurance</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/AllEx'>Explosive</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to = '/AllStr'>Strength</Link>
                                </DropdownItem>
                                
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
            </ul>

            {/* <li className = "navbar-item">

                <Link to = '/loginpage' className = "nav-link">Logout</Link>


                
                </li> */}

                    <ul className = "navbar-nav ml-auto">
                        <li className = "navbar-item">
                        <NavItem> 
                            <Link to = '/login'>Login    |   </Link>  
                                             
                        </NavItem>
                    
                        </li>
                        <br/>

                        <li className = "navbar-item">
                            <NavItem> 
                                <Link to = '/registration'>   Register</Link>
                            </NavItem>
                        </li>

                    </ul>
                 {/* <nav className = "navbar-nav ml-auto">
                    
                    <NavItem> 
                        <Link to = '/login'>login</Link>
                    
                    </NavItem>
    
                    </nav>
                <nav className = "navbar-nav ml-auto">
                    
                <NavItem> 
                    <Link to = '/registration'>Register</Link>
                </NavItem>

                </nav> */}
            </div>
        </nav>
    );
  }
}

export default Navbar
