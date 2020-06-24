import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Explosive = (props) => {
  return (

    <ListGroup>
        <h2> List of Explosive Exercises</h2>
        <br/>
    
      <ListGroupItem tag="a" href="#">Box jumps</ListGroupItem>
      <ListGroupItem tag="a" href="#">Kettlebell swing</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Power clean</ListGroupItem>
      <ListGroupItem tag="a" href="#">Tuck jump</ListGroupItem>
    </ListGroup>
  );
}


export default Explosive
