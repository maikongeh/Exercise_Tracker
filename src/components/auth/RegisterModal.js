import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {register} from  '../../actions/authActions';

export class RegisterModal extends Component {

    state = {
        modal:false,
        roleArr: ['Coach', 'Athlete'],
        role: '',
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated : PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    } 

    componentDidMount = () => {
        this.setState({
            role: 'Coach'
        })
    } 

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    

    onChangeRole = e => {
        this.setState({
            role: e.target.value
        });
    }

    onChangeName= e =>{
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword= e =>{
        this.setState({
            password: e.target.value
        });
    }


    onSubmit = e => {
        e.preventDefault();

        const {name, email, password} = this.state;
        const newUser = {
            name,
            email,
            password
        };
        //Attempt to register
        this.props.register(newUser);
    }


  render() {
    return (
      <div>
        <NavLink onClick = {this.toggle} href = "#"> Register </NavLink>
            <Modal isOpen = {this.state.modal} toggle = {this.toggle}>
                <ModalHeader toggle = {this.toggle}> Register</ModalHeader>
                <ModalBody>
                    <Form onSubmt = {this.onSubmit}>
                        <FormGroup>
                                <Label for ="role">Role</Label>
                                <select ref = "userInput"
                                        required
                                        className = "form-control"
                                        value = {this.state.role}
                                        onChange = {this.onChangeRole}>
                          
                                        {
                                            this.state.roleArr.map(function(role) {
                                                return <option
                                                        key = {role}
                                                        value = {role}> {role} 
                                                        </option>;
                                             })
                                        }             
                                </select>
                                <br/>

                                <Label for ="name">Name</Label>
                                <br/>
                                <Input 
                                
                                type = "text"
                                name = "name"
                                placeholder = "name"
                                value = {this.state.name}
                                onChange = {this.onChangeName}
                                />
                               <br/>

                                <Label for ="email">Email</Label>
                                <br/>
                                <Input 
                                
                                type = "email"
                                name = "email"
                                placeholder = "Enter Email"
                                value = {this.state.email}
                                onChange = {this.onChangeEmail}
                                />
                                <br/>

                                <Label for ="password">Password</Label>
                                <br/>
                                <Input 
                                  
                                type = "password"
                                name = "password"
                                placeholder = "*******"
                                value = {this.state.password}
                                onChange = {this.onChangePassword}
                                />

                                

                                <Button color = "dark" style = {{marginTop: '2rem'}} block>
                                {/* <input 
                                type = "submit"
                                value = "Register"
                                /> */}
                                Register
                                </Button>

                    
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error

});

export default connect(
    mapStateToProps,
    {register}
     )(RegisterModal);


