import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Endurance = (props) => {
  return (

    <ListGroup>
        <h2> List of Endurance Exercises</h2>
        <br/>
      <ListGroupItem tag="a" href="#">Burpees</ListGroupItem>
      <ListGroupItem tag="a" href="#">Interval Run 2min/1min</ListGroupItem>
      <ListGroupItem tag="a" href="#">Long run</ListGroupItem>
      <ListGroupItem tag="a" href="#">Tempo run</ListGroupItem>
      <ListGroupItem tag="a" href="#">Planks - up and down</ListGroupItem>
      <ListGroupItem tag="a" href="#">Planks - spider</ListGroupItem>
      <ListGroupItem tag="a" href="#">Planks - shouler touch</ListGroupItem>
      <ListGroupItem tag="a" href="#">Wall sit</ListGroupItem>
    </ListGroup>
  );
}


export default Endurance
