import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

export class loginpage extends Component {


    onSubmit(e) {
        //stops it from doing the normal submit functionality
        e.preventDefault();

        window.location = '/';
    }


  render() {
    return (
        <Container>
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                // id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                // id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>
              
              <Link to ="/HomePage"> Login </Link>

          </Button>
        </Form>
      </Container>
    )
  }
}

export default loginpage
