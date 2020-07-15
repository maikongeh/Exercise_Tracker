import React, { Component } from 'react'
import axios from 'axios';

export class registration extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);      
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {            
            name: '',
            email: '',
            password: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        //stops it from doing the normal submit functionality
        e.preventDefault();

        const NewUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log(NewUser);
        axios.post('http://localhost:8000/user/add', NewUser)
        .then(res => console.log(res.data));

        // How to do the bottom thing Async so that it waits for post request to be complete before rerouting to the List
        window.location = '/loginpage';
    }
    

  render() {
    return (
      <div>
          
          <h3>Create New Account</h3>
          <form onSubmit = {this.onSubmit}>

              <div className = "form-group">
                  <label>Name</label>
                  <input 
                    type = "name"
                    name = "name"
                    placeholder = "name"
                    required
                    className = "form-control"
                    value = {this.state.name}
                    onChange = {this.onChangeName}
                    />
              </div>

              <div className = "form-group">
                  <label>Email</label>
                  <input 
                    type = "email"
                    name = "email"
                    placeholder = "myemail@email.com"
                    required
                    className = "form-control"
                    value = {this.state.email}
                    onChange = {this.onChangeEmail}
                    />
              </div>

              <div className = "form-group">
                  <label>Password</label>
                  <input 
                    type = "password"
                    name = "password"
                    placeholder = "********"
                    required
                    className = "form-control"
                    value = {this.state.password}
                    onChange = {this.onChangePassword}
                    />
                  
                </div>
                  
                <div className = "form-group">
                      <input 
                       type = "submit"
                       value = "Create New Account"
                       className = "btn btn-primary"
                       />
                </div>
            </form>
       </div>
    )
  }
}

export default registration
