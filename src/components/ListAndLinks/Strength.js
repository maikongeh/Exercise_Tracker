import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Strength = (props) => {
  return (

    <ListGroup>
        <h2> List of Strength Exercises</h2>
        <br/>
        <ListGroupItem tag="a" href="#">Barbell squat</ListGroupItem>
        <ListGroupItem tag="a" href="#">Bench Press</ListGroupItem>
        <ListGroupItem tag="a" href="#">Bicep curls</ListGroupItem>
        <ListGroupItem tag="a" href="#">Deadlift</ListGroupItem>
        <ListGroupItem tag="a" href="#">Romanian Deadlift</ListGroupItem>
        <ListGroupItem tag="a" href="#">Skullcrusher</ListGroupItem>
        <ListGroupItem tag="a" href="#">Tricep extension</ListGroupItem>
        <ListGroupItem tag="a" href="#">Weighted Dips</ListGroupItem>
        <ListGroupItem tag="a" href="#">Weighted lunges</ListGroupItem>
        <ListGroupItem tag="a" href="#">Weighted split squat</ListGroupItem>
      </ListGroup>
  );
}


export default Strength
