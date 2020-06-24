import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Agility = (props) => {
  return (

    <ListGroup>
        <h2> List of Agility Exercises</h2>
        <br/>
        <ListGroupItem tag="a" href="#">Aeroplane</ListGroupItem>
      
      <ListGroupItem tag="a" href="#">Bulgarian split squat</ListGroupItem>
      <ListGroupItem tag="a" href="#">High Knees</ListGroupItem>
      <ListGroupItem tag="a" href="#">Lateral dumbbell Lunges</ListGroupItem>
      <ListGroupItem tag="a" href="#">Squat Jumps</ListGroupItem>
      <ListGroupItem tag="a" href="#">skipping - normal</ListGroupItem>
      <ListGroupItem tag="a" href="#">Skipping - double unders</ListGroupItem>
    </ListGroup>
  );
}


export default Agility
