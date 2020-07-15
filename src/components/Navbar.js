import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem}

        from 'reactstrap';

export class Navbar extends Component {
  render() {
    return (
        <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to ="/HomePage" className = " navbar-brand"> ExerciseTracker</Link>
            <div className = "collapse navbar-collapse">
            <ul className = "navbar-nav mr-auto">
                <li classaName = "navbar-item">
                    <UncontrolledDropdown nav in Navbar>
                        <DropdownToggle nav caret>My Workouts</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Agility
                                </DropdownItem>
                                <DropdownItem>
                                    Endurance
                                </DropdownItem>
                                <DropdownItem>
                                    Explosive
                                </DropdownItem>
                                <DropdownItem>
                                    Strength
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
                <li className = "navbar-item">

                <Link to = '/loginpage' className = "nav-link">Logout</Link>


                </li>
            </ul>
            </div>
        </nav>
    );
  }
}

export default Navbar
